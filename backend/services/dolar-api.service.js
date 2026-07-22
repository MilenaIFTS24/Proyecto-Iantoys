const BASE_URL = 'https://dolarapi.com';
const DOLAR_OFICIAL = '/v1/dolares/oficial';
const DOLAR_CRIPTO = '/v1/dolares/cripto';

export async function getDolarOficial() {
    try {
        const response = await fetch(`${BASE_URL}${DOLAR_OFICIAL}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

export async function getDolarCripto() {
    try {
        const response = await fetch(`${BASE_URL}${DOLAR_CRIPTO}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}