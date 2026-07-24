import { Router } from 'express';
import * as DolarApiController from '../controllers/dolar-api.controller.js';

const router = Router();

router.get('/dolar-oficial', DolarApiController.obtenerDolarOficial);
router.get('/dolar-cripto', DolarApiController.obtenerDolarCripto);

export default router;