const morgan = require("morgan");
const cors = require('cors');
const express = require('express');

module.exports = [
    morgan("dev"),
    cors(),
    express.json()
]