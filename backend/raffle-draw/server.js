require("dotenv").config();
require("colors")
const http = require("http")
const app = require('./app/app')
const server = http.createServer(app)
const PORT = process.env.PORT || 8000;


server.listen(PORT, () => console.log(`Server is listening on PORT ${PORT}` .blue))