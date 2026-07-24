import * as ProductService from '../services/producto.service.js';

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
        const newProduct = await ProductService.createProductService(req.body);
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(400).json({ error: "Error al crear el producto: " + error.message });
    }
};

export const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedProduct = await ProductService.updateProductService(id, req.body);
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(404).json({ error: `Error al actualizar el producto con id ${id}: ` + error.message });
    }
};

export const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await ProductService.deleteProductService(id);
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({ error: `Error al eliminar el producto con id ${id}: ` + error.message });
    }
};

