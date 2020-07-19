import axios from 'axios';

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: 'Client-ID T8q8vPskuX90AIzBWZlzxjd7PuOys1VGqeMacqnsink'
    }
});