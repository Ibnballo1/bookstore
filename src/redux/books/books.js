// Actions
export const ADD_BOOK = 'bookstore/books/ADD_BOOK';
export const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

// initial state
const bookState = [];

// Action Creators
export const addBook = (data) => ({
  type: ADD_BOOK,
  payload: data,
});

export const removeBook = (data) => ({
  type: REMOVE_BOOK,
  payload: data,
});

// Reducer

const bookReducer = (state = bookState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        action.payload,
      ];
    case REMOVE_BOOK:
      return [
        ...state,
        state.filter((book, index) => book[index] !== action.payload.index),
      ];
    default:
      return state;
  }
};

export default bookReducer;
