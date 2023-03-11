const dotenv = require("dotenv");
const port = process.env.PORT || 8000;
dotenv.config();

module.exports = {

    "open_api_version": "3.0.3",

    "title": "Task",

    "version": "1.0.0",

    "description": "Controller for Task Calls are defined here",

    "url": "http://localhost:" + port,

    "apis": ["./routes/*.js"]

}
