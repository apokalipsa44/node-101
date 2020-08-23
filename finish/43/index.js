const exec = require("child_process").exec;
const spawn = require("child_process").spawn;

// exec("ping -c 4 google.com", function(err, stdout, stderr) {

//     if(err) {
//         return console.log(err);
//     }

//     console.log(stdout);
//     console.log(stderr);

// });

var ping = spawn("ping", ["-c", "4", "google.com"]);

ping.stdout.on("data", function(data) {

    console.log( data.toString() );

});

ping.stderr.on("data", function(data) {

    console.log( data.toString() );

});

ping.on("close", function(code) {

    console.log(`Proces zakońaczył się z kodem ${code}`);

});

// 1. Zbuduj stronę w HTML z poszczególnych szablonów
// 2. Przeładuj stronę w przeglądarce

/*

gulp.task("jekyll", function(done) {

    return cp.spawn("jekyll", ["build"])
        .on("close", function() {
            browserSync.reload();
            done();
        });

});

*/