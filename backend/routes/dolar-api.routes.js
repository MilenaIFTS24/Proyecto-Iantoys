import {  Router } from 'express';
import { getDolarOficial, getDolarCripto } from '../controllers/dolar-api.controller.js';

const router = Router();

router.get('/dolar-oficial', getDolarOficial);
router.get('/dolar-cripto', getDolarCripto);

export default router;