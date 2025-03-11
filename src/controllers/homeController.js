"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAbout = exports.getHome = void 0;
var userService_1 = require("../services/userService");
var getHome = function (req, res) {
    var users = (0, userService_1.getAllUsers)();
    res.render('index', {
        title: 'Express TypeScript with EJS',
        user: { name: 'Guest User' },
        users: users
    });
};
exports.getHome = getHome;
var getAbout = function (req, res) {
    res.render('about', {
        title: 'About Us',
        content: 'This is the about page.'
    });
};
exports.getAbout = getAbout;
