import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

// Auth
export const auth = (payload) => axios.post(`${API_URL}/auth`, payload);

// Categories
export const getCategories = () => axios.get(`${API_URL}/categories`);
