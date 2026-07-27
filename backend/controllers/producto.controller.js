import * as ProductService from '../services/producto.service.js';
import { sequelize } from '../config/database.js';
import { Archivo } from '../models/index.model.js';

export const getProducts = async (req, res) => {
    try {
        const productos = await ProductService.getAllProductsService();
        res.status(200).json(productos);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener los productos: " + error.message });
    }
};

export const getProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const producto = await ProductService.getProductByIdService(id);
        res.status(200).json(producto);
    } catch (error) {
        res.status(404).json({ error: `Error al buscar el producto con id ${id}: ` + error.message });
    }
};

export const createProduct = async (req, res) => {
    try {
        if (!req.files || req.files.length === 0) {
            return res.status(400).json({ error: "Debes subir al menos una imagen." });
        }

        const promesasSubida = req.files.map(async (file) => {
            const nombreUnico = `${Date.now()}-${file.originalname}`;

            const { error } = await sequelize.storage
                .from('imagenes')
                .upload(nombreUnico, file.buffer, {
                    contentType: file.mimetype,
                    upsert: false
                });

            if (error) throw error;

            const { data: publicUrlData } = sequelize.storage
                .from('imagenes')
                .getPublicUrl(nombreUnico);

            return {
                nombre: file.originalname,
                url: publicUrlData.publicUrl,
                size: file.size,
                mimetype: file.mimetype
            };
        });

        const imagenesData = await Promise.all(promesasSubida);

        const newProduct = await ProductService.createProductService({
            ...req.body,
            imagenesData
        });

        res.status(201).json(newProduct);
    } catch (error) {
        if (error.code === 'LIMIT_FILE_SIZE') {
            return res.status(400).json({ error: "Una de las imágenes supera el límite de tamaño permitido (5MB)." });
        }
        res.status(400).json({ error: "Error al crear el producto: " + error.message });
    }
};

export const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        let imagenesData = null;

        if (req.files && req.files.length > 0) {
            const imagenesAntiguas = await Archivo.findAll({ where: { productoId: id } });

            if (imagenesAntiguas.length > 0) {
                const nombresArchivosA_Borrar = imagenesAntiguas.map(img => {
                    const partesUrl = img.url.split('/');
                    return partesUrl[partesUrl.length - 1];
                });

                const { error: errorBorrado } = await sequelize.storage
                    .from('imagenes')
                    .remove(nombresArchivosA_Borrar);

                if (errorBorrado) console.error("Error limpiando el storage de Supabase:", errorBorrado.message);
            }

            const promesasSubida = req.files.map(async (file) => {
                const nombreUnico = `${Date.now()}-${file.originalname}`;

                const { error } = await sequelize.storage
                    .from('imagenes')
                    .upload(nombreUnico, file.buffer, {
                        contentType: file.mimetype,
                        upsert: false
                    });

                if (error) throw error;

                const { data: publicUrlData } = sequelize.storage
                    .from('imagenes')
                    .getPublicUrl(nombreUnico);

                return {
                    nombre: file.originalname,
                    url: publicUrlData.publicUrl,
                    size: file.size,
                    mimetype: file.mimetype
                };
            });

            imagenesData = await Promise.all(promesasSubida);
        }

        const updatedProduct = await ProductService.updateProductService(id, {
            ...req.body,
            imagenesData
        });

        res.status(200).json(updatedProduct);
    } catch (error) {
        if (error.code === 'LIMIT_FILE_SIZE') {
            return res.status(400).json({ error: "Una de las imágenes supera el límite de tamaño permitido (5MB)." });
        }
        res.status(400).json({ error: "Error al actualizar el producto: " + error.message });
    }
};

export const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;

        const imagenesAsociadas = await Archivo.findAll({ where: { productoId: id } });

        if (imagenesAsociadas.length > 0) {
            const nombresArchivosA_Borrar = imagenesAsociadas.map(img => {
                const partesUrl = img.url.split('/');
                return partesUrl[partesUrl.length - 1];
            });

            const { error: errorBorrado } = await sequelize.storage
                .from('imagenes')
                .remove(nombresArchivosA_Borrar);

            if (errorBorrado) {
                console.error("Advertencia al limpiar Supabase Storage:", errorBorrado.message);
            }
        }

        await ProductService.deleteProductService(id);

        res.status(200).json({ message: "Producto y sus imágenes eliminados exitosamente." });
    } catch (error) {
        res.status(400).json({ error: "Error al eliminar el producto: " + error.message });
    }
};

