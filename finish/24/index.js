const del = require("del");

del("files/", {dryRun: true}).then(function(paths) {
    console.log(`Pliki do usunięcia: ${paths}`);
});