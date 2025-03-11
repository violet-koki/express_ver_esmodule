import express, { Router } from 'express';
import { getHome, getAbout } from '../controllers/homeController';

export const router: Router = express.Router();

router.get('/', getHome);
router.get('/about', getAbout);