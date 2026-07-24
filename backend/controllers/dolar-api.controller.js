import { getDolarCripto, getDolarOficial } from "../services/dolar-api.service.js";

export const obtenerDolarOficial = async(req, res) => {
    try {
        const dolarOficial = await getDolarOficial();
        res.status(200).json(dolarOficial);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el dolar oficial: ' + error.message });
    }
};

export const obtenerDolarCripto = async(req, res) => {
    try {
        const dolarCripto = await getDolarCripto();
        res.status(200).json(dolarCripto);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el dolar cripto: ' + error.message });
    }
};