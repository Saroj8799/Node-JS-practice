//express is the 3rd party module in node js.
//express is the framework (rest framework)
//express is used to develop Rest Service
//Ex:Get Post,Delete,Put,Patch
//express modile we will download by using yarn and npm tool.
// ex npm install express --save


 let express=require("express");
 //create the rest object
let app= express();
app.get("/",(req,res)=>{
    res.status(200).json({"message":"default get request..."});
});
app.get("/demo",(req,res)=>{
    res.status(200).json({"message":"data from mongoDB..."});
});
app.post("/",(req,res)=>{
    res.status(200).json({"message":"default post request"})
});
app.post("/demo",(req,res)=>{
    res.status(200).json({"message":"data JPA"})
});
app.listen(8202),()=>{
    console.log("server started");
    
}

