import axios from 'axios';

const ACCESS_KEY = '_Ht4d1irK5F7M1TROfNWcnKwZc8OFtdJ2AmchdCTunA';
const BASE_URL = 'https://api.unsplash.com';

export default axios.create({
    baseURL: BASE_URL,
    headers: {
        Authorization: `Client-ID ${ACCESS_KEY}`
    }
});

