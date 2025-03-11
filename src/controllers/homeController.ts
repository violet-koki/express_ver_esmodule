import { Request, Response } from 'express';
import { getAllUsers } from '../services/userService.js';
import path from 'path';
import { fileURLToPath } from 'url';


export const getHome = (req: Request, res: Response): void => {
  const users = getAllUsers();
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  console.log(path.join(__dirname, '../src/views'));
  console.log('================');
  console.log(__dirname);
  res.render('index', {
    title: 'Express TypeScript with EJS test',
    user: { name: 'Guest User' },
    users: users
  });
};

export const getAbout = (req: Request, res: Response): void => {
  res.render('about', {
    title: 'About Us',
    content: 'This is the about page.'
  });
};