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
        allowNull: false
    },
    fecha: {
        type: DataTypes.DATE,
        allowNull: false
    },
    precioMercadoUSD: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    precioVenta: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    precioVentaUSD: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    porcentajeGanancia: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    ganancia: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    gananciaUSD: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    totalGananciaMes: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    totalGananciaMesUSD: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    totalGastoMes: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    totalGastoMesUSD: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    balanceFinal: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    balanceFinalUSD: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    estado: {
        type: DataTypes.ENUM('PEDIDO', 'RECIBIDO', 'VENDIDO', 'FINALIZADO'),
        allowNull: false
    }
}, {
    tableName: 'Registro',
    timestamps: true
}
);

export default Registro;