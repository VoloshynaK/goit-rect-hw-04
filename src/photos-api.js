import axios from "axios";

const accessKey = 'lX2fIolLk4h-KCxhoUo-f3P6BgF_ahdQdn2Ny3rhBv0';
const URL = `https://api.unsplash.com/search/photos/?client_id=${accessKey}`;


export default async function fetchImages (value, page) {
    const response = await axios.get(`${URL}&page=${page}&orientation=landscape&query='${value}'`);
    return response.data;
}