const express = require("express");
const WebSocketServer = require("ws").Server;
const hbs = require("express-handlebars");
const app = express();

app.engine("handlebars", hbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.use( express.static("public") );

app.get("/", function(req, res) {

    res.render("home", {
        title: "Wyślij wiadomość"
    });

});

app.listen(8080, function() {

    console.log("Serwer został uruchomiony pod adresem http://localhost:8080");

});

var wss = new WebSocketServer({ port: 3000 });

wss.on("connection", function(socket) {

    socket.on("message", function(msg) {

        console.log(msg);

        socket.send( msg.toUpperCase() );

    });

});