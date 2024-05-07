import * as express from "express";

 let app:any=express();
  
 app.get("/ashokit",(req:any,res:any):any=>{
res.status(200).json({"message":"Welcome to express"});
 });
app.listen(8081,()=>{
    console.log("Server run");
});

