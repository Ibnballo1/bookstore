import http from '../http_common';

// To fetch or get all books from Api
export const getAll = () => http.get('/Es3EeXLrD6JC1JTdUz94/books');

// to create and send book to API
export const create = (data) => http.post('/Es3EeXLrD6JC1JTdUz94/books/', data);

// to delete book from api
export const remove = (id) => http.delete(`/Es3EeXLrD6JC1JTdUz94/books/${id}`);

const bookstoreServices = {
  getAll,
  create,
  remove,
};

export default bookstoreServices;
