import axios from 'axios';

export const ADD_BOOK = 'bookstore/books/ADD_BOOK';
export const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
export const FETCH_BOOK = 'bookstore/books/FETCH_BOOK';

const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/lOEYpVLxqrf1c1e4xdr2/books';
const books = [];

export const fetchBooks = (payload) => ({
  type: FETCH_BOOK,
  payload,
});

export const getBooks = () => async (dispatch) => {
  const books = await axios.get(baseURL);
  const bookArr = Object.entries(books.data).map((item) => {
    const { title, author } = item[1][0];
    return {
      id: item[0],
      title,
      author,
    };
  });
  dispatch(fetchBooks(bookArr));
};

export const addBooks = (book) => async (dispatch) => {
  const newBook = {
    item_id: book.id,
    title: book.title,
    author: book.author,
    category: 'Action',
  };
  await axios.post(baseURL, newBook);
  dispatch({
    type: ADD_BOOK,
    payload: book,
  });
};

export const removeBook = (book) => async (dispatch) => {
  await axios.delete(`${baseURL}${book.id}`);
  dispatch({
    type: REMOVE_BOOK,
    payload: book,
  });
};

// Reducer
const bookReducer = (state = books, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_BOOK:
      return [...state, payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== payload);
    case FETCH_BOOK:
      return action.payload;
    default:
      return state;
  }
};

export default bookReducer;
