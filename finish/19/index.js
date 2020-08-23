const fs = require("fs");
const net = require("net");

const server = net.createServer(function(socket) {

    var counter = 0;

    var interval = setInterval(function() {

        if(counter === 10) {
            clearInterval(interval);
            socket.end();
            return;
        }

        socket.write( String(++counter) );

    }, 1000);

    socket.on("data", function(data) {
        console.log(data.toString());
    });

});

server.listen(8080, function() {

    console.log("Serwer zostal uruchomiony pod adresem 127.0.0.1:8080");

});

const client = net.connect({port: 8080});

client.setEncoding("utf8");
client.on("data", function(data) {

    fs.appendFile("./data.txt", data + "\n");

    client.write("Otrzymałem dane: " + data);

});

client.on("close", function() {

    console.log("Zakończono połączenie z serwerem.");

});