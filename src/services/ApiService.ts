import axios, { AxiosInstance, AxiosResponse } from 'axios';

interface ApiResponse {
  data: any;
};

const apiUrl = 'http://localhost:3001/';

const apiClient: AxiosInstance = axios.create({
  baseURL: apiUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default {
  async fetchData(): Promise<any> {
    try {
      const response: AxiosResponse<ApiResponse> = await apiClient.get('/user');
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar dados da API:', error);
      throw error;
    }
  },
};
