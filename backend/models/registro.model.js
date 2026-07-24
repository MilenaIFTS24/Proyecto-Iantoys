import { DataTypes } from "sequelize";
import sequelize from '../config/database.js';

const Registro = sequelize.define('Registro', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    idProducto: {
        type: DataTypes.UUID,
        references: {
            model: 'Producto',
            key: 'id'
        },
        allownull: false
    },
    fecha: {
        type: DataTypes.DATE,
        allownull: false
    },
    precioMercadoUSD: {
        type: dataTypes.FLOAT,
        allownull: false
    },
    precioVenta: {
        type: dataTypes.FLOAT,
        allownull: false
    },
    precioVentaUSD: {
        type: dataTypes.FLOAT,
        allownull: false
    },
    porcentajeGanancia: {
        type: dataTypes.PERCENT,
        allownull: false
    },
    ganancia: {
        type: dataTypes.FLOAT,
        allownull: false
    },
    gananciaUSD: {
        type: dataTypes.FLOAT,
        allownull: false
    },
    totalGananciaMes: {
        type: dataTypes.FLOAT,
        allownull: false
    },
    totalGananciaMesUSD: {
        type: dataTypes.FLOAT,
        allownull: false
    },
    totalGastoMes: {
        type: dataTypes.FLOAT,
        allownull: false
    },
    totalGastoMesUSD: {
        type: dataTypes.FLOAT,
        allownull: false
    },
    balanceFinal: {
        type: dataTypes.FLOAT,
        allownull: false
    },
    balanceFinalUSD: {
        type: dataTypes.FLOAT,
        allownull: false
    },
    estado: {
        type: DataTypes.ENUM('PEDIDO', 'RECIBIDO', 'VENDIDO', 'FINALIZADO'),
        allownull: false
    }
}, {
    tableName: 'Registro',
    timestamps: true
}
);

export default Registro;