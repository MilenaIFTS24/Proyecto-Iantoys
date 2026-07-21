import { Imagen } from "./imagen.model.js";
export class Juguete {

    constructor(id, nombre, descripcion, precio, stock, peso, alto, ancho, largo) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
        this.imagenes = [];
        this.peso = peso;
        this.descripcion = descripcion
        this.volumen = alto * ancho * largo;
    }

    agregarImagen(imagen) {
        this.imagenes.push(imagen);
    }

}