import axios from 'axios';

const API_URL = `${import.meta.env.VITE_REACT_APP_API_URL}/api/contact`;

const api = axios.create({
    baseURL: API_URL,
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export const sendContactMessage = async (contactData) => {
    try {
        const response = await axios.post(API_URL, contactData);
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.error || 'Error al enviar el mensaje');
    }
};

export const fetchAllMessages = async () => {
    try {
        const response = await api.get('/admin');
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.error || 'Error al obtener los mensajes de soporte');
    }
};

export const markAsRead = async (messageId) => {
    try {
        const response = await api.put(`/admin/${messageId}/read`);
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.error || 'Error al marcar el mensaje como leído');
    }
};