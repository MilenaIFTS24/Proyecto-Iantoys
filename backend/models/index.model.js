import Archivo from "./archivo.model.js";
import Producto from "./producto.model.js";

// Archivo y Producto
Producto.hasMany(Archivo, { as: 'imagenes', foreignKey: 'productoId' });
Archivo.belongsTo(Producto, { foreignKey: 'productoId' });

export { Archivo, Producto };