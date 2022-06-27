const express = require("express");
const bodyParser = require("body-parser");
const response = require("./www/response");

// const router = require("./components/messages/network");
const router = require("./www/routes");

var app = express();

app.use(bodyParser.json());
// app.use(router);

router(app);

app.use('/app', express.static('public'));

app.listen(3000);

console.log('listening on port 3000');