

{
    "_id": "1"
    ,"last_name": "Test"
    , "first_name": "Father"
    , "age": "35"
}


var patient = [
    {
        "_id": "1"
        , "last_name": "Test"
        , "first_name": "Father"
        , "age": "35"
    },
    {
        "_id": "2"
        , "last_name": "Test"
        , "first_name": "Mother"
        , "age": "35"
    },
    {
        "_id": "3"
        , "last_name": "Test"
        , "first_name": "Daughter"
        , "age": "5"
    },
    {
        "_id": "4"
        , "last_name": "Test"
        , "first_name": "Son"
        , "age": "3"
    }
]

var patient2 = [
    {
        "_id": "1"
        , "last_name": "Test"
        , "first_name": "Father"
        , "age": "35"
        , "insurance": [
        {"payer_name": "Cigna"},
        {"payer_name": "Blue Cross Blue Shield"},
        {"payer_name": "Medicare"}
    ]
    },
    {
        "_id": "2"
        , "last_name": "Test"
        , "first_name": "Mother"
        , "age": "35"
    },
    {
        "_id": "3"
        , "last_name": "Test"
        , "first_name": "Daughter"
        , "age": "5"
    },
    {
        "_id": "4"
        , "last_name": "Test"
        , "first_name": "Son"
        , "age": "3"
        , "clinical_data": [    {
        "Medications": [
            {"idOfMedication": "12", "description": "amoxicillin"},
            {"idOfMedication": "13", "description": "tylenol"}
        ]
    },
        {
            "Allergies": [
                {"idOfAllergy": "14", "description": "pollen"},
                {"idOfAllergy": "15", "description": "pet dander"}
            ]
        }
    ]
    }
]


/*
 C:\Program Files (x86)\RSA SecurID Token Common;C:\Program Files\RSA SecurID Token Common;C:\Program Files\Common Files\Microsoft Shared\Microsoft Online Services;C:\Program Files (x86)\Common Files\Microsoft Shared\Microsoft Online Services;C:\ProgramData\Oracle\Java\javapath;C:\Program Files\Common Files\Microsoft Shared\Windows Live;C:\Program Files (x86)\Common Files\Microsoft Shared\Windows Live;%SystemRoot%\system32;%SystemRoot%;%SystemRoot%\System32\Wbem;%SYSTEMROOT%\System32\WindowsPowerShell\v1.0\;C:\Program Files\WIDCOMM\Bluetooth Software\;C:\Program Files\WIDCOMM\Bluetooth Software\syswow64;C:\Program Files\Intel\WiFi\bin\;C:\Program Files\Common Files\Intel\WirelessCommon\;C:\Program Files\Intel\DMIX;C:\Program Files (x86)\NTRU Cryptosystems\NTRU TCG Software Stack\bin\;C:\Program Files\NTRU Cryptosystems\NTRU TCG Software Stack\bin\;C:\Program Files (x86)\Intel\Services\IPT\;C:\Program Files\Dell\Dell Data Protection\Access\Advanced\Wave\Gemalto\Access Client\v5\;C:\Program Files (x86)\Microsoft SQL Server\100\Tools\Binn\;C:\Program Files\Microsoft SQL Server\100\Tools\Binn\;C:\Program Files\Microsoft SQL Server\100\DTS\Binn\;C:\Program Files (x86)\Microsoft SQL Server\100\Tools\Binn\VSShell\Common7\IDE\;C:\Program Files (x86)\Microsoft Visual Studio 9.0\Common7\IDE\PrivateAssemblies\;C:\Program Files (x86)\Microsoft SQL Server\100\DTS\Binn\;C:\Program Files (x86)\Windows Live\Shared;c:\Program Files (x86)\Microsoft SQL Server\90\Tools\binn\;C:\Program Files\Perforce;C:\Program Files (x86)\Perforce;C:\Program Files\Microsoft\Web Platform Installer\;C:\Program Files\Microsoft SQL Server\110\Tools\Binn\;C:\Program Files (x86)\Microsoft SQL Server\110\Tools\Binn\ManagementStudio\;C:\Program Files (x86)\Microsoft SQL Server\110\Tools\Binn\;C:\Program Files (x86)\Microsoft Visual Studio 10.0\Common7\IDE\PrivateAssemblies\;C:\Program Files (x86)\Microsoft SQL Server\110\DTS\Binn\;C:\Program Files (x86)\Comm;C:\Program Files\MongoDB\Server\3.0\bin;C:\Users\mgarcia\AppData\Roaming\npm;C:\Program Files\Git\bin;C:\Program Files\nodejs\;C:\Program Files (x86)\Windows Kits\8.1\Windows Performance Toolkit\

 */