var express = require('express');
var app = express();
var portNumber = '12345'
var path = require('path');
var rootPath = path.normalize(__dirname);
var mongoClient = require('mongodb');
var mongoConnStr = 'mongodb://localhost:27017/ngprod';
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var mongoClient = require('mongodb');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var mongoConnStr = 'mongodb://localhost:27017/ngdevl'
var sql = require('mssql');
var sqlConfig = {
    user: 'sa',
    password: 'nextgen',
    server: 'localhost',
    database: 'NG58GR_83'
}


app.use(express.static(rootPath + '/app'));


/*
app.get('/', function(req, res){
   res.send('Welcome to node');
});
*/

app.post('/savePatient', jsonParser, function(req,res){

    mongoClient.connect(mongoConnStr, function(err, db){
        if(err){
            console.log('failed to connect to mongo');
        }
        else{
            console.log('successfully connected to mongo');
            db.collection('patient').insertOne(req.body);
        }
        db.close();
    })

});

app.get('/viewPerson', function(req, res){
    var sqlConnection = new sql.Connection(sqlConfig, function(err){

        var request = new sql.Request(sqlConnection);
        request.query('select top 10 * from person', function(err, recordset){
            //console.dir(JSON.stringify(recordset));
            res.send(JSON.stringify(recordset));
        })
    });
});




app.listen(portNumber);
console.log('listening on port ' + portNumber);


/*
    Pre-cooked.

    var mongoClient = require('mongodb');
    var mongoConnStr = 'mongodb://localhost:27017/ngprod';
    var bodyParser = require('body-parser');
    var jsonParser = bodyParser.json();

     app.post('/savePatient', jsonParser, function(req,res){

     mongoClient.connect(mongoConnStr, function(err, db){
     if(err){
     console.log('failed to connect to mongo');
     }
     else{
     console.log('successfully connected to mongo');
     }
     db.close();
     })

     });


 */