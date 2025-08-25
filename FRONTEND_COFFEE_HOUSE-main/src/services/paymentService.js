import axios from 'axios';

const API_URL = `${import.meta.env.VITE_REACT_APP_API_URL}/api/payment`;

export const createPaymentOrder = async (orderData) => {
    const token = localStorage.getItem('token');
    
    const response = await axios.post(`${API_URL}/create-order`, orderData, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    
    return response.data;
};