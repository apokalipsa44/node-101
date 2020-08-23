var value = 1;

function get() {
    return value;
}

function set(val) {
    value = val;
}

module.exports = {get, set};