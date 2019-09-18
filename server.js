const soap = require('soap');
const express = require('express');
const app = express();

var service = {
    BMI_Service : {
        BMI_Port : {
            calculateBMI:function(args){
                var year = new Date().getFullYear();
                var n = (args.weight)/(args.height*args.height);
                console.log(n);
                return {bmi : n};
            }
        }
    }
}
// xml data is extracted from wsdl file created
var xml = require('fs').readFileSync('./bmicalculator.wsdl','utf8');
//create an express server and pass it to a soap server
var server = app.listen(3030, function(){
    var host = "127.0.0.1";
    var port = server.address().port;
});
soap.listen(server,'/bmicalculator',service,xml,function(){
    console.log('server initialized');
});
