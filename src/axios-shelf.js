import axios from 'axios';

const instance = axios.create({
    headers: {"Access-Control-Allow-Origin": "*"},
    baseURL: 'https://www.goodreads.com/review/'
});

export default instance;