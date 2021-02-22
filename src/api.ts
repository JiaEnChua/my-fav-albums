import axios from './axios';

const fetchApi = async () => {
  const response = await axios.get('/');
  return response;
};

export default fetchApi;
