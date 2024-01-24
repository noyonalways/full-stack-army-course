require("dotenv").config('../.env')
const express = require("express");
const { notFoundHandler, errorHandler } = require("./error");
const app = express();



app.use(require("./middlewares"))
app.use(require("./routes"))

app.use(notFoundHandler) // 404 page
app.use(errorHandler) // global error handler

module.exports = app;