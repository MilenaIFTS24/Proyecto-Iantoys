import Producto from "../models/producto.model.js";

export const getAllProductsService = async () => {
    const productos = await Producto.findAll();
    if (productos.length === 0) {
        throw new Error("No se encontraron productos.");
    }    
    return productos;
};

export const getProductByIdService = async (id) => {
    const producto = await Producto.findByPk(id);
    if (!producto) {
        throw new Error("Producto no encontrado.");
    }
    return product;
};

export const createProductService = async (productData) => {
    const { nombre, categoria, descripcion, precioMercado, precioVenta, stock, imagenes, peso, alto, ancho, largo } = productData;

    if (!nombre || !categoria || !descripcion || !precioMercado || !precioVenta || !stock) {
        throw new Error("Faltan datos obligatorios.");
    }

    return await Producto.create({ nombre, categoria, descripcion, precioMercado, precioVenta, stock, imagenes, peso, alto, ancho, largo });
};

export const updateProductService = async (id, updateData) => {
    const producto = await Producto.findByPk(id);
    if (!producto) {
        throw new Error("Producto no encontrado.");
    }
    return await producto.update(updateData);
};

export const deleteProductService = async (id) => {
    const producto = await Producto.findByPk(id);
    if (!producto) {
        throw new Error("Producto no encontrado.");
    }
    await producto.destroy();
    return { message: "Producto eliminado correctamente." };
};