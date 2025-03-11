import express, { Router } from 'express';
import { getUsers, getUserByIdHandler } from '../controllers/userController.js';

export const router: Router = express.Router();

router.get('/users', getUsers);
router.get('/users/:id', getUserByIdHandler);