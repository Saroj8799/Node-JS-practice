"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
app.get("/ashokit", function (req, res) {
    res.status(200).json({ "message": "Welcome to express" });
});
app.listen(8081, function () {
    console.log("Server run");
});
