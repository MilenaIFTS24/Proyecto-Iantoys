import * as ProductController from '../controllers/producto.controller.js';
import { Router } from 'express';

const router = Router();

router.get("/", ProductController.getProducts);
router.get("/:id", ProductController.getProductById);

router.post("/", ProductController.createProduct);
router.put("/:id", ProductController.updateProduct);
router.delete("/:id", ProductController.deleteProduct);

export default router;