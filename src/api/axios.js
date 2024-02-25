import axios from 'axios';

export const makeRequest = axios.create({
  //method: 'GET',
  baseURL: 'https://63905cbd0bf398c73a84e157.mockapi.io',
});
