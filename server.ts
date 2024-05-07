import * as express from "express";
import transaction from "./transaction";
import accounts from "./accounts"
let app:any=express();
app.use("/module1",transaction);
app.use("/module2",accounts);
app.listen(8084),()=>{
    console.log("server started");
}