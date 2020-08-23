const fs = require("fs");
const path = require("path");

// function readFile(file, cb) {

//     fs.readFile(path.join(__dirname, "files", file), function(err, data) {

//         if(err) {
//             cb(err);
//         } else {
//             cb(null, data.toString());
//         }

//     });

// }

// readFile("lorem1.txt", function(err, data) {

//     if(err) {
//         console.log(`Wystąpił błąd: ${err.message}`);
//     } else {
//         console.log(data);
//     }

// });

function readFile(file) {

    var p = new Promise(function(resolve, reject) {

        fs.readFile(path.join(__dirname, "files", file), function(err, data) {

            if(err) {
                reject(err);
            } else {
                resolve( data.toString() );
            }

        });

    });

    return p;

}

readFile("lorem1.txt")
    .then(function(data) {
        throw new Error("Własny błąd");

        console.log(data);

        return data;
    }).then(function(data) {
        console.log( data.toUpperCase() );
    })
    .catch(function(err) {
        console.log(`Wystąpił błąd: ${err.message}`);
    });