import { configureStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
// import bookReducer from './books/books';
// import bookReducer from './books/books';
import categoryReducer from './categories/categories';
import bookReducer, { getBooks } from './books/books';

const rootReducer = combineReducers({
  bookReducer,
  categoryReducer,
});

const initialState = {};
const middleware = [thunk];

const store = configureStore(
  { reducer: rootReducer },
  initialState,
  applyMiddleware(...middleware, thunk),
);
store.dispatch(getBooks());

export default store;
