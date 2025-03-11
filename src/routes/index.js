"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
var homeController_1 = require("../controllers/homeController");
exports.router = express_1.default.Router();
exports.router.get('/', homeController_1.getHome);
exports.router.get('/about', homeController_1.getAbout);
