import { Imagen } from "./imagen.model.js";
export class Juguete {

    constructor(id, nombre, descripcion, precio, stock) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
        this.imagenes = [];
        this.descripcion = descripcion
    }

    agregarImagen(imagen) {
        this.imagenes.push(imagen);
    }

}