"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
var userController_1 = require("../controllers/userController");
exports.router = express_1.default.Router();
exports.router.get('/users', userController_1.getUsers);
exports.router.get('/users/:id', userController_1.getUserByIdHandler);
