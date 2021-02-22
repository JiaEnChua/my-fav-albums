import axios from 'axios';
import { corsEndpoint } from './constant';

const instance = axios.create({
  baseURL: corsEndpoint,
  timeout: 4000,
  headers: {
    common: {
      'Content-Type': 'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin': '*',
    },
  },
});

export default instance;
