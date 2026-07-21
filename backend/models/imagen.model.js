import Multer from "multer";

export class Archivo extends Multer.File {
    constructor(id, fieldname, originalname, encoding, mimetype, buffer, size, destination, filename, path) {
        super(fieldname, originalname, encoding, mimetype, buffer, size, destination, filename, path);
        this.id = id;
    }
}