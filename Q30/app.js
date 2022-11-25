const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = require('./router/index');

app.use(bodyParser.json()).use(bodyParser.urlencoded({limit:'50mb', extended:true})).use('/app',router);

var server = app.listen(5000, () => {
    console.log("Server listening on port " + server.address().port);
});