const express = require("express");
const app = express();
const accesslogger = require("./lib/log/accesslogger");
const systemlogger = require("./lib/log/systemlogger");

app.set("view engine", "ejs");
app.disable("x-powered-by");

app.use("/public", express.static(__dirname + "/public/" + (process.env.NODE_ENV === "development" ? "development" : "production")));

app.use(accesslogger());

app.use("/", require("./routes/index"));

app.use(systemlogger());

app.listen(8000);
