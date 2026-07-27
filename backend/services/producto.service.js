import Producto from "../models/producto.model.js";
import { sequelize } from "../config/database.js";

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
    const { nombre, categoria, descripcion, precioMercado, precioVenta, stock, imagenesData, peso, alto, ancho, largo } = productData;

    if (!nombre || !categoria || !descripcion || !precioMercado || !precioVenta || !stock) {
        throw new Error("Faltan datos obligatorios.");
    }

    return await Producto.create({ nombre, categoria, descripcion, precioMercado, precioVenta, stock, imagenes: imagenesData, peso, alto, ancho, largo }, { include: [{ model: Archivo, as: 'imagenes' }] });
};

export const updateProductService = async (id, updateData) => {
    const { imagenesData, ...datosProducto } = productData;

    const t = await sequelize.transaction();

    try {
        const producto = await Producto.findByPk(id, { transaction: t });
        if (!producto) throw new Error("Producto no encontrado.");

        await producto.update(datosProducto, { transaction: t });

        if (imagenesData) {
            await Archivo.destroy({ where: { productoId: id }, transaction: t });

            const nuevasImagenes = imagenesData.map(img => ({
                ...img,
                productoId: id
            }));

            await Archivo.bulkCreate(nuevasImagenes, { transaction: t });
        }

        await t.commit();

        return await Producto.findByPk(id, {
            include: [{ model: Archivo, as: 'imagenes' }]
        });

    } catch (error) {
        await t.rollback();
        throw error;
    }
};

export const deleteProductService = async (id) => {
    const t = await sequelize.transaction();

    try {
        const producto = await Producto.findByPk(id, { transaction: t });
        if (!producto) {
            throw new Error("Producto no encontrado.");
        }

        await Archivo.destroy({ where: { productoId: id }, transaction: t });

        await producto.destroy({ transaction: t });

        await t.commit();
        return true;

    } catch (error) {
        await t.rollback();
        throw error;
    }
};