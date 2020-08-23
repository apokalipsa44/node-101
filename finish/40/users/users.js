const Q = require("q");
const mongoose = require("mongoose");

const DB_USER = "user";
const DB_PASSWORD = "password";

mongoose.connect(`podstaw tutaj adres z Twojego mlab.com`);

var schema = new mongoose.Schema({
    name: String,
    lastName: String
});

var User = mongoose.model("User", schema);

function addUser(userData) {

    var def = Q.defer();

    var user = new User(userData);

    user.save(function(err, user) {

        if(err) {
            def.reject(err);
        } else {
            def.resolve(user);
        }

    });

    return def.promise;

}

function getUser(id) {

    var def = Q.defer();

    User.findById(id).exec(function(err, user) {

        if(err) {
            def.reject(err);
        } else {
            def.resolve(user);
        }

    });

    return def.promise;

}

function updateUser(userData) {

    var def = Q.defer();

    var id = userData.id;

    delete userData.id;

    User.findByIdAndUpdate(id, userData).exec(function(err, user) {

        if(err) {
            def.reject(err);
        } else {
            def.resolve(user);
        }

    });

    return def.promise;

}

function deleteUser(id) {

    var def = Q.defer();

    User.findByIdAndRemove(id).exec(function(err, user) {

        if(err) {
            def.reject(err);
        } else {
            def.resolve(user);
        }

    });

    return def.promise;

}

function listUsers() {

    var def = Q.defer();

    User.find({}).exec(function(err, users) {

        if(err) {
            def.reject(err);
        } else {
            def.resolve(users);
        }

    });

    return def.promise;

}

module.exports = {
    add: addUser,
    get: getUser,
    update: updateUser,
    delete: deleteUser,
    list: listUsers
};