import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Archivo = sequelize.define("Archivo", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    productID: {
        type: DataTypes.UUID,
        references: {
            model: "Producto",
            key: "id"
        },
        allownull: false
    },
    nombre: {
        type: DataTypes.STRING,
        allownull: false
    },
    url: {
        type: DataTypes.STRING,
        allownull: false
    },
    size: {
        type: DataTypes.INTEGER,
        allownull: true
    },
    mimetype: {
        type: DataTypes.STRING,
        allownull: true
    },

},{
    tableName: "Archivo",
    timestamps: true
}
);

export default Archivo;