const baseUrl = 'https://dolarapi.com';
const dolarOficial = '/v1/dolares/oficial';
const dolarCripto = '/v1/dolares/cripto';

const getDolarOficial = async () => {
    try {
        const response = await fetch(`${baseUrl}${dolarOficial}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

const getDolarCripto = async () => {
    try {
        const response = await fetch(`${baseUrl}${dolarCripto}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

export default dolar-api;