function sleep(ms) {

    var now = Date.now();

    while(Date.now() - now < ms) {

    }

}

const http = require("http");
const url = require("url");
const querystring = require("querystring");

const server = http.createServer(function(req, res) {

    // fs.readFile("./lorem1.txt", function(err, data) {
    //     res.end(data);
    // });

    var kill = querystring.parse( url.parse(req.url).query ).kill;

    if(kill == 1) {
        sleep(10000);
    }

    res.end("Hello world!");

});

server.listen(8080, function() {
    console.log("Serwer uruchomiony pod adresem http://localhost:8080");
});