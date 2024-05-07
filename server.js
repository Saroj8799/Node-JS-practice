"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var transaction_1 = require("./transaction");
var accounts_1 = require("./accounts");
var app = express();
app.use("/module1", transaction_1.default);
app.use("/module2", accounts_1.default);
app.listen(8084), function () {
    console.log("server started");
};
