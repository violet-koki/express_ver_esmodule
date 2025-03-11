import express, { Express } from 'express';
import path from 'path';
import { router as indexRouter } from './routes/index.js';
import { router as apiRouter } from './routes/api.js';
import { errorHandler } from './middleware/errorHandler.js';
import { config } from './config/env.js';

// Express アプリケーションの初期化
const app: Express = express();
const port = config.port;
console.log('======');

// ESModule対応のため、__dirnameの代替を作成
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// テンプレートエンジンの設定
console.error(path.join(__dirname, '../src/views'));
app.set('views', path.join(__dirname, '../src/views'));
app.set('view engine', 'ejs');

// ミドルウェア
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// ルート
app.use('/', indexRouter);
app.use('/api', apiRouter);

// エラーハンドリング
app.use(errorHandler);

// サーバー起動
app.listen(port, () => {
  console.log(`Server running in ${config.nodeEnv} mode at http://localhost:${port}`);
});

export default app;