import { getDolarCripto, getDolarOficial } from "../services/dolar-api.service.js";

export async function obtenerDolarOficial(req, res) {
    try {
        const dolarOficial = await getDolarOficial();
        res.json(dolarOficial);
    } catch {
        res.status(500).json({ error: 'Error al obtener el dolar oficial' });
    }
}

export async function obtenerDolarCripto(req, res) {
    try {
        const dolarCripto = await getDolarCripto();
        res.json(dolarCripto);
    } catch {
        res.status(500).json({ error: 'Error al obtener el dolar cripto' });
    }
}