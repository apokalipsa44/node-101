const path = require("path");
const readFile = require("./readfile").readFile;
const readFileSync = require("./readfile").readFileSync;

// var file = readFile(/*path.join(__dirname, "files", "lorem4.txt")*/);

// file
//     .on("data", function(data) {
//         console.log( data.toString() );
//     })
//     .on("error", function(err) {
//         console.log(err);
//     });

// console.log("To będzie pierwszy console.log");

// var file2 = readFileSync(path.join(__dirname, "files", "lorem4.txt"));

// console.log( file2 );

readFile(null, function(err, data) {

    if(err) {
        console.log("Wystąpił błąd: " + err.message);
    } else {
        console.log(data);
    }

});

console.log("Hello!");