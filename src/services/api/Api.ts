import axios from 'axios';
const Api = axios.create({
  baseURL: 'https://sowlab.com/assignment',
});
export default Api;
