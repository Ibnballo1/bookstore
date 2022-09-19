// Actions
export const ADD_BOOK = 'bookstore/books/ADD_BOOK';
export const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

// initial state
const bookState = [];

// Action Creators
export const addBook = () => ({
  type: ADD_BOOK,
});

export const removeBook = () => ({
  type: REMOVE_BOOK,
});

// Reducer

const bookReducer = (state = bookState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
      ];
    case REMOVE_BOOK:
      return [
        ...state,
      ];
    default:
      return state;
  }
};

export default bookReducer;
