import axios from 'axios';

// This is the configuration for sending HTTP Requests with Axios
// Very simple, but it also doesn't give us much abstraction
const eCommerceClient = axios.create({
  withCredentials: true,
  baseURL: 'http://54.221.133.128:8080',
});

export interface eCommerceApiResponse {
  status: number;
  payload: any;
}

export default eCommerceClient;