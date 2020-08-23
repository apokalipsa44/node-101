function sleep(ms) {

    var now = Date.now();

    while(Date.now() - now < ms) {

    }

}

console.log("Hello");

console.time("setTimeout");
setTimeout(function cb() {
    console.log("3 sekundy później");
    console.timeEnd("setTimeout");
}, 3000);

sleep(6000);

console.log("world!");