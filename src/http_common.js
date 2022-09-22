import axios from 'axios';

// Hold the base url of the api
axios.create({
  baseURL: 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps',
  headers: {
    'Content-type': 'application/json',
  },
});

export default axios;
