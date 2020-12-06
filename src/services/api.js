import axios from 'axios';
// import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-toastify';

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

export const setInstance = (token) => {
  localStorage.setItem('', token);
  instance.defaults.headers['Authorization'] = `Bearer ${token}`;
};

export const removeInstance = () => {
  localStorage.removeItem('');
  delete instance.defaults.headers['Authorization'];
};

instance.interceptors.response.use(
  (response) => {
    if (response.config.method !== 'get' && response?.data?.message) {
      toast.success(response.data.message);
    }
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      removeInstance();
    }
    if (error.config.method !== 'get' && error.response?.data?.message) {
      let message = error.response.data.message;
      if (error.response.data.errors) {
        message += `\n ${Object.values(error.response.data.errors)
          .map(({ msg }) => msg)
          .join(`\n`)}`;
      }
      toast.error(message);
    }
    return Promise.reject(error);
  }
);

export default instance;
