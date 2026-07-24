import * as RegistroController from '../controllers/registro.controller.js';
import { Router } from 'express';

const router = Router();

router.get("/", RegistroController.getRecords);
router.get("/:id", RegistroController.getRecordById);

router.post("/", RegistroController.createRecord);
router.put("/:id", RegistroController.updateRecord);
router.delete("/:id", RegistroController.deleteRecord);

export default router;