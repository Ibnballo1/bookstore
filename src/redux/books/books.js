// Actions
export const ADD_BOOK = 'bookstore/books/ADD_BOOK';
export const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

// initial state
const state = [];

// Action Creators
export addBook = () => {
  return {
    type: ADD_BOOK,
  }
};

export removeBook = () => {
  return {
    type: REMOVE_BOOK,
  }
}

// Reducer

const bookReducer = (state, action) => {
  switch(action.type) {
    case ADD_BOOK:
      return [
        ...state
      ];
    case REMOVE_BOOK:
      return [
        ...state
      ];
    default:
      return state;
  }
}

export default bookReducer;
