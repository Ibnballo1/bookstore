// Actions
export const ADD_BOOK = 'bookstore/books/ADD_BOOK';
export const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

// initial state
const bookState = {
  data: [
    { title: 'Book 1', author: 'Author 1', id: 0 },
    { title: 'Book 2', author: 'Author 2', id: 1 },
  ],
};

// Action Creators
export const addBook = (title, author, id) => ({
  type: ADD_BOOK,
  payload: {
    title,
    author,
    id,
  },
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  payload: id,
});

// Reducer
const bookReducer = (state = bookState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    case REMOVE_BOOK:
      return {
        ...state,
        data: state.data.filter((book) => book.id !== action.payload),
      };
    default:
      return state;
  }
};

export default bookReducer;
