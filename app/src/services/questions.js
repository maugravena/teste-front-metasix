import http from './config';

export default {
  get: () => http.get('/FAQ')
};
