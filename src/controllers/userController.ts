import { Request, Response } from 'express';
import { getAllUsers, getUserById } from '../services/userService.js';

export const getUsers = (req: Request, res: Response): void => {
  const users = getAllUsers();
  res.json({
    success: true,
    data: users
  });
};

export const getUserByIdHandler = (req: Request, res: Response): void => {
  const id = parseInt(req.params.id);
  
  if (isNaN(id)) {
    res.status(400).json({
      success: false,
      error: 'Invalid user ID'
    });
    return;
  }
  
  const user = getUserById(id);
  
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