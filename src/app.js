"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var path_1 = require("path");
var index_1 = require("./routes/index");
var api_1 = require("./routes/api");
var errorHandler_1 = require("./middleware/errorHandler");
var env_1 = require("./config/env");
// Express アプリケーションの初期化
var app = (0, express_1.default)();
var port = env_1.config.port;
// テンプレートエンジンの設定
app.set('views', path_1.default.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// ミドルウェア
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
// ルート
app.use('/', index_1.router);
app.use('/api', api_1.router);
// エラーハンドリング
app.use(errorHandler_1.errorHandler);
// サーバー起動
app.listen(port, function () {
    console.log("Server running in ".concat(env_1.config.nodeEnv, " mode at http://localhost:").concat(port));
});
exports.default = app;
