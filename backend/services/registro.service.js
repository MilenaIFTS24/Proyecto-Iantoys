import Registro from "../models/registro.model.js";

export const getAllRecordsService = async () => {
    const registros = await Registro.findAll();
    if (registros.length === 0) {
        throw new Error("No se encontraron registros.");
    }
    return registros;
};

export const getRecordById = async (id) => {
    const registro = await Registro.findByPk(id);
    if (!registro) {
        throw new Error("Registro no encontrado.");
    }
    return registro;
};

export const createRecordService = async (recordData) => {
    const { idProducto, fecha, precioMercadoUSD, precioVenta, precioVentaUSD, porcentajeGanancia, ganancia, gananciaUSD, totalGananciaMes, totalGananciaMesUSD, totalGastoMes, totalGastoMesUSD, balanceFinal, balanceFinalUSD, estado } = recordData;

    if (!idProducto || !fecha || !precioMercadoUSD || !precioVenta || !precioVentaUSD || !porcentajeGanancia || !ganancia || !gananciaUSD || !totalGananciaMes || !totalGananciaMesUSD || !totalGastoMes || !totalGastoMesUSD || !balanceFinal || !balanceFinalUSD || !estado) {
        throw new Error("Todos los campos son obligatorios.");        
    }

    return await Registro.create({ idProducto, fecha, precioMercadoUSD, precioVenta, precioVentaUSD, estado });
};

export const updateRecordService = async (id, updateData) => {
    const registro = await Registro.findByPk(id);
    if (!registro) {
        throw new Error("Registro no encontrado.");
    }
    return await registro.update(updateData);
};

export const deleteRecordService = async (id) => {
    const registro = await Registro.findByPk(id);
    if (!registro) {
        throw new Error("Registro no encontrado.");
    }
    await registro.destroy();
    return { message: "Registro eliminado correctamente." };
};