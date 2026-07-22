import {  Router } from 'express';
import { obtenerDolarCripto, obtenerDolarOficial } from '../controllers/dolar-api.controller.js';

const router = Router();

router.get('/dolar-oficial', obtenerDolarOficial);
router.get('/dolar-cripto', obtenerDolarCripto);

export default router;