import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Producto = sequelize.define('Producto', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING,
        allownull: false
    },
    categoria: {
        type: DataTypes.ENUM('MARVEL', 'DC', 'POKEMON', 'MARVEL LEGENDS', 'DRAGON BALL', 'CT TOYS', 'MESS TOYS', 'AC TOYS', 'MAX FACTORY', 'BOOTLEGS'),
        allownull: false
    },
    descripcion: {
        type: DataTypes.TEXT,
        allownull: false
    },
    precioMercado: {
        type: DataTypes.FLOAT,
        allownull: false
    },
    precioVenta: {
        type: DataTypes.FLOAT,
        allownull: false
    },
    stock: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allownull: false
    },
    imagenes: {
        type: DataTypes.ARRAY,
        defaultValue: [],
        allownull: true
    },
    peso: {
        type: DataTypes.FLOAT,
        allownull: true
    },
    alto: {
        type: DataTypes.FLOAT,
        allownull: true
    },
    ancho: {
        type: DataTypes.FLOAT,
        allownull: true
    },
    largo: {
        type: DataTypes.FLOAT,
        allownull: true
    }
}, {
    tableName: 'Producto',
    timestamps: true
}
);

export default Producto;