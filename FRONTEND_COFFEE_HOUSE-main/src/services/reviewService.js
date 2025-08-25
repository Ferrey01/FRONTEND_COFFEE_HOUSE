import axios from 'axios';

const API_URL = `${import.meta.env.VITE_REACT_APP_API_URL}/api/reviews`;

const api = axios.create({
    baseURL: API_URL,
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

export const createReview = async (reviewData) => {
    try {
        const response = await api.post('/', reviewData);
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.error || 'Error al enviar la reseña');
    }
};

export const getReviews = async (type, itemId) => {
    try {
        const response = await axios.get(`${API_URL}/${type}/${itemId}`);
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.error || 'Error al obtener las reseñas');
    }
};