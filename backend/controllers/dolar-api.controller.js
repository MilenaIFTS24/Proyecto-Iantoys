import dolarApi from "../services/dolar-api.service.js";

const getDolarOficial = async (req, res) => {
    try {
        const dolarOficial = await dolarApi.getDolarOficial();
        res.json(dolarOficial);
    } catch (error) {
        console.error(error);
    }
}

const getDolarCripto = async (req, res) => {
    try {
        const dolarCripto = await dolarApi.getDolarCripto();
        res.json(dolarCripto);
    } catch (error) {
        console.error(error);
    }
}

export default { getDolarOficial, getDolarCripto };