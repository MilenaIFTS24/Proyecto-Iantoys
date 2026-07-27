import * as ProductController from '../controllers/producto.controller.js';
import { Router } from 'express';
import multer from 'multer';

const router = Router();
const upload = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 5 * 1024 * 1024
    },
    fileFilter: (req, file, cb) => {
        const tiposPermitidos = ['image/jpeg', 'image/png', 'image/webp', 'image/jpg'];
        if (tiposPermitidos.includes(file.mimetype)) {
            cb(null, true);
        } else {
            cb(new Error('Tipo de archivo no permitido.'), false);
        }
    }
});

router.get("/", ProductController.getProducts);
router.get("/:id", ProductController.getProductById);

router.post("/", upload.array('images', 5), ProductController.createProduct);
router.put("/:id", upload.array('images', 5), ProductController.updateProduct);
router.delete("/:id", ProductController.deleteProduct);

export default router;