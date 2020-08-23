const express = require("express");
const hbs = require("express-handlebars");
const app = express();

app.engine("handlebars", hbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.use( express.static("public") );

app.get("/", function(req, res) {

    res.render("home", {
        title: "Strona główna",
        content: "To jest treść strony głównej."
    });

});

app.get("/blog/:date/:id?", function(req, res) {

    res.render("blog", {
        title: "Blog",
        date: req.params.date,
        id: req.params.id
    });

});

app.listen(8080, function() {

    console.log("Serwer został uruchomiony pod adresem http://localhost:8080");

});