"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserByIdHandler = exports.getUsers = void 0;
var userService_1 = require("../services/userService");
var getUsers = function (req, res) {
    var users = (0, userService_1.getAllUsers)();
    res.json({
        success: true,
        data: users
    });
};
exports.getUsers = getUsers;
var getUserByIdHandler = function (req, res) {
    var id = parseInt(req.params.id);
    if (isNaN(id)) {
        res.status(400).json({
            success: false,
            error: 'Invalid user ID'
        });
        return;
    }
    var user = (0, userService_1.getUserById)(id);
    if (!user) {
        res.status(404).json({
            success: false,
            error: 'User not found'
        });
        return;
    }
    res.json({
        success: true,
        data: user
    });
};
exports.getUserByIdHandler = getUserByIdHandler;
