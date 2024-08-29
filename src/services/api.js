import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/api', // URL da sua API Django
});

export const makePayment = (paymentData) => api.post('/payments/', paymentData);
