import * as express from "express";

let transaction:any=express.Router();
transaction.get("/",(req:any,res:any):any=>{
    res.status(200).json({"message":"transaction express"});

});
transaction.get("/piece",(req:any,res:any):any=>{
    res.status(200).json({"message":"Rest In Peace"});

});

export default transaction;