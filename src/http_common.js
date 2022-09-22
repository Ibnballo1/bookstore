import axios from 'axios';

axios.create({
  baseURL: 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps',
  headers: {
    'Content-type': 'application/json',
  },
});

export default axios;
