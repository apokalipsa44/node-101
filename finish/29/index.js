const express = require("express");
const app = express();

app.get("/", function(req, res) {

    res.send("Strona główna!");

});

app.get("/o-nas", function(req, res) {

    res.send("O nas!");

});

app.get("/blog/:date/:id?", function(req, res) {

    res.send(`
        Wpis o id ${req.params.id} utworzony ${req.params.date}
        <pre>${JSON.stringify(req.query, null, 4)}</pre>
    `);

});

app.listen(8080, function() {

    console.log("Serwer został uruchomiony pod adresem http://localhost:8080");

});