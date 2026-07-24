import Producto from "../models/producto.model.js";

export const getAllProductsService = async () => {
    const productos = await Producto.findAll();
    if (productos.length === 0) {
        throw new Error("No se encontraron productos.");
    }    
    return productos;
};

export const getProductByIdService = async (id) => {
    const product = await Producto.findByPk(id);
    if (!product) {
        throw new Error("Producto no encontrado.");
    }
    return product;
};

export const createProductService = async (productData) => {
    const { nombre, categoria, descripcion, precioMercado, precioVenta, stock } = productData;

    if (!nombre || !categoria || !descripcion || !precioMercado || !precioVenta || !stock) {
        throw new Error("Faltan datos obligatorios.");
    }

    return await Producto.create({ nombre, categoria, descripcion, precioMercado, precioVenta, stock });
};

export const updateProductService = async (id, updateData) => {
    const product = await Producto.findByPk(id);
    if (!product) {
        throw new Error("Producto no encontrado.");
    }
    return await product.update(updateData);
};

export const deleteProductService = async (id) => {
    const product = await Producto.findByPk(id);
    if (!product) {
        throw new Error("Producto no encontrado.");
    }
    await product.destroy();
    return { message: "Producto eliminado correctamente." };
};