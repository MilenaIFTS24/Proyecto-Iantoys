import * as RegistroService from "../services/registro.service.js";

export const getRecords = async (req, res) => {
    try {
        const registros = await RegistroService.getAllRecordsService();
        res.status(200).json(registros);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener los registros: " + error.message });        
    }
};

export const getRecordById = async (req, res) => {
    try {
        const { id } = req.params;
        const registro = await RegistroService.getRecordById(id);
        res.status(200).json(registro);
    } catch (error) {
        res.status(404).json({ error: `Error al buscar el registro con id ${id}: ` + error.message });        
    }
};

export const createRecord = async (req, res) => {
    try {
        const newRecord = await RegistroService.createRecordService(req.body);
        res.status(201).json(newRecord);
    } catch (error) {
        res.status(400).json({ error: "Error al crear el registro: " + error.message });        
    }
};

export const updateRecord = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedRecord = await RegistroService.updateRecordService(id, req.body);
        res.status(200).json(updatedRecord);
    } catch (error) {
        res.status(404).json({ error: `Error al actualizar el registro con id ${id}: ` + error.message });        
    }
};

export const deleteRecord = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await RegistroService.deleteRecordService(id);
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({ error: `Error al eliminar el registro con id ${id}: ` + error.message });        
    }
};