import axios from 'axios';

const API_URL = `${import.meta.env.VITE_REACT_APP_API_URL}/api/catalog`;

export const getHomePageData = async () => {
    try {
        const response = await axios.get(`${API_URL}/home-sections`);
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.error || 'Error al obtener los datos de la página de inicio');
    }
};