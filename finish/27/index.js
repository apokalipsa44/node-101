const express = require("express");
const app = express();

app.disable("x-powered-by");

app.get("/", function(req, res) {

    // res.removeHeader("X-Powered-By");
    res.send("Hello World!");

});

app.listen(8080, function() {

    console.log("Serwer został uruchomiony pod adresem http://localhost:8080");

});