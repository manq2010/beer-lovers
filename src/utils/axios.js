import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.punkapi.com/v2/',
  headers: {
    'Content-type': 'application/json',
  },
});
