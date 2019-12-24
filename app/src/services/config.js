import axios from 'axios';

const http = axios.create({
  baseURL: 'https://poc.metasix.solutions/parse/classes',
  headers: { 'X-Parse-Application-Id': 'br.com.metasix.poc' }
});

export { http as default };
