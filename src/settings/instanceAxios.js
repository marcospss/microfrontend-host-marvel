import axios from 'axios';
import { API } from './api';

 const INSTANCE = axios.create({
  baseURL: API.apiEndpoint,
});

export default INSTANCE;