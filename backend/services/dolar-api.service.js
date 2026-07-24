const BASE_URL = 'https://dolarapi.com';
const DOLAR_OFICIAL = '/v1/dolares/oficial';
const DOLAR_CRIPTO = '/v1/dolares/cripto';

export const getDolarOficial = async () => {
    const response = await fetch(`${BASE_URL}${DOLAR_OFICIAL}`);
    const data = await response.json();

    if (!data) {
        throw new Error("No se pudo obtener el precio del dolar oficial.");
    }

    return data;
};

export const getDolarCripto = async () => {
    const response = await fetch(`${BASE_URL}${DOLAR_CRIPTO}`);
    const data = await response.json();

    if (!data) {
        throw new Error("No se pudo obtener el precio del dolar cripto.");
    }

    return data;
};