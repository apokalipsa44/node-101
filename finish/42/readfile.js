const EventEmitter = require("events").EventEmitter;
const fs = require("fs");

// function readFile(path) {

//     var ev = new EventEmitter();

//     if(!path) {
//         process.nextTick(function() {
//             ev.emit("error", new Error("path musi być podane!"));
//         });

//         return ev;
//     }

//     fs.readFile(path, function(err, data) {

//         if(err) {
//             ev.emit("error", err);
//         } else {
//             ev.emit("data", data);
//         }

//     });

//     return ev;

// }

function readFile(path, cb) {

    if(!path) {
        return process.nextTick(function() {
            cb(new Error("path musi być podane!"));
        });
    }

    fs.readFile(path, function(err, data) {

        if(err) {
            cb(err);
        } else {
            cb(null, data);
        }

    });

}

function readFileSync(path) {

    try {
        return fs.readFileSync(path);
    } catch(e) {
        return null;
    }

}

module.exports = {
    readFile,
    readFileSync
};