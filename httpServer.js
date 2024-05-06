//http Server are used to create the Server
//import  module(http module)
//require() function  used to import the module
 let http=require("http");
 //create Server
 let server=http.createServer((req,res)=>{
    res.write("welcome tO Node js")
    res.end();
 });
 server.listen(8081);
 console.log("server ");