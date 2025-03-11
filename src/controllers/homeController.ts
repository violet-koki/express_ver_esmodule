import { Request, Response } from 'express';
import { getAllUsers } from '../services/userService';

export const getHome = (req: Request, res: Response): void => {
  const users = getAllUsers();
  
  res.render('index', {
    title: 'Express TypeScript with EJS',
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