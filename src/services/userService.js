"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllUsers = exports.getUserById = void 0;
// モックユーザーデータ（実際にはデータベースから取得）
var users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
];
var getUserById = function (id) {
    return users.find(function (user) { return user.id === id; });
};
exports.getUserById = getUserById;
var getAllUsers = function () {
    return users;
};
exports.getAllUsers = getAllUsers;
