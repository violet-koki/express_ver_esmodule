import express, { Express } from 'express';
import path from 'path';
import { router as indexRouter } from './routes/index';
import { router as apiRouter } from './routes/api';
import { errorHandler } from './middleware/errorHandler';
import { config } from './config/env';

// Express アプリケーションの初期化
const app: Express = express();
const port = config.port;

// テンプレートエンジンの設定
app.set('views', path.join(__dirname, 'views'));
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