import axios from 'axios';

const API_URL = `${import.meta.env.VITE_REACT_APP_API_URL}/api/supplier`;

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

export const getDashboardData = async (range) => {
    try {
        const response = await api.get(`/stats?range=${range}`);
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.error || 'Error al obtener los datos del dashboard');
    }
};

export const getSalesReport = async (range) => {
    try {
        const response = await api.get(`/sales-report?range=${range}`);
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.error || 'Error al obtener el reporte de ventas');
    }
};

export const getProductStats = async () => {
    try {
        const response = await api.get('/product-stats');
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.error || 'Error al obtener las estadísticas de productos');
    }
};

export const getOrderStats = async (range) => {
    try {
        const response = await api.get(`/order-stats?range=${range}`);
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.error || 'Error al obtener las estadísticas de pedidos');
    }
};

export const getLowStockItems = async () => {
    try {
        const response = await api.get('/low-stock-items');
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.error || 'Error al obtener los ítems con bajo stock');
    }
};