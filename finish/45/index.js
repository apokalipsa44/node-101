const express = require("express");
const app = express();
const server = require("http").Server(app);
const hbs = require("express-handlebars");
const chat = require("./chat");

const io = require("socket.io")(server);

app.engine("handlebars", hbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.use( express.static("public") );

app.get("/", function(req, res) {

    res.render("home", {
        title: "Czat grupowy",
        styles: [
            "bootstrap.css",
            "custom.css"
        ],
        scripts: [
            "jquery.js",
            "handlebars.js",
            "socket.io.js",
            "chat.js"
        ],
        dbUser: process.env.DB_USER,
        dbPassword: process.env.DB_PASSWORD
    });

});

server.listen(process.env.PORT || 8080, function() {

    console.log("Serwer został uruchomiony.");

});

chat(io);