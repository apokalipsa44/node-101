const fs = require("fs");
const path = require("path");

function sortByDate(files, dir) {

    files.sort(function(a, b) {

        var aStat = fs.statSync(path.join(dir, a));
        var bStat = fs.statSync(path.join(dir, b));

        return aStat.birthtime.getTime() - bStat.birthtime.getTime();

    });

    return files;

}

function newFileName(format, ext, index) {

    var formatted = format.replace(/(\$+)/, function(match) {

        var diff = match.length - String(index).length;

        return "0".repeat(diff < 0 ? 0 : diff) + index;

    });

    return formatted + "." + ext;

}

module.exports = {
    sortByDate: sortByDate,
    newFileName: newFileName
};