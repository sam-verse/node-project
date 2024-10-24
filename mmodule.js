const smodule1 =require("./smodule1")

smodule1("Vasanth");

//step1: importing the server
const http1=require('http');

//step2: creating a server
const webserver = http1.createServer((req,res)=>{
    res.end("Abraham");
    res.end(smodule1 ("Vasanth"));
});

//step3:assign the portnumber for the server
const port=3500;
webserver.listen(port,()=>{
      console.log("The Current server running in http://localhost:3500");
});