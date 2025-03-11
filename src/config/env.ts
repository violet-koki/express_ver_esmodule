import dotenv from 'dotenv';

// .envファイルを読み込む
dotenv.config();

export const config = {
  port: process.env.PORT || 3000,
  nodeEnv: process.env.NODE_ENV || 'development',
  // データベース接続情報などもここに追加できます
};