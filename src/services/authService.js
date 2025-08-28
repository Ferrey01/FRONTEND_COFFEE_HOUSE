import axios from 'axios';

const API_URL = `${import.meta.env.VITE_REACT_APP_API_URL}/api/auth`;

export const forgotPassword = async (email) => {
    try {
        const response = await axios.post(`${API_URL}/forgot-password`, { email });
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.error || 'Error al solicitar el reinicio de contraseña');
    }
};

export const resetPasswordWithCode = async (email, code, password) => {
    try {
        const response = await axios.post(`${API_URL}/reset-password-with-code`, { email, code, password });
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.error || 'Error al actualizar la contraseña');
    }
};