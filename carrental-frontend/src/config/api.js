// API Configuration
// This file centralizes all API endpoint configurations

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8081';

export const API_ENDPOINTS = {
    AUTH: {
        LOGIN: `${API_BASE_URL}/auth/login`,
        SIGNUP: `${API_BASE_URL}/auth/signup`,
        LOGOUT: `${API_BASE_URL}/auth/logout`,
    },
    // Add more endpoints as needed
    // CARS: {
    //   GET_ALL: `${API_BASE_URL}/api/cars`,
    //   GET_BY_ID: (id) => `${API_BASE_URL}/api/cars/${id}`,
    // }
};

export default API_BASE_URL;
