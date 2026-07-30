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
        allowNull: false
    },
    categoria: {
        type: DataTypes.ENUM('MARVEL', 'DC', 'POKEMON', 'MARVEL LEGENDS', 'DRAGON BALL', 'CT TOYS', 'MESS TOYS', 'AC TOYS', 'MAX FACTORY', 'BOOTLEGS'),
        allowNull: false
    },
    descripcion: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    precioMercado: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    precioVenta: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    stock: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false
    },
    imagenes: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        defaultValue: [],
        allowNull: true
    },
    peso: {
        type: DataTypes.FLOAT,
        allowNull: true
    },
    alto: {
        type: DataTypes.FLOAT,
        allowNull: true
    },
    ancho: {
        type: DataTypes.FLOAT,
        allowNull: true
    },
    largo: {
        type: DataTypes.FLOAT,
        allowNull: true
    }
}, {
    tableName: 'Producto',
    timestamps: true
}
);

export default Producto;