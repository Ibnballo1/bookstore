/* eslint-disable react/no-array-index-key */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = () => {
  const books = useSelector((state) => state.bookReducer.data);
  const dispatch = useDispatch();

  return (
    <section>
      {
        books.map((book, index) => (
          <div key={index}>
            <h1>{book.title}</h1>
            <p>{book.author}</p>
            <button
              type="button"
              onClick={() => dispatch(removeBook(book.id))}
            >
              Remove
            </button>
          </div>
        ))
      }
    </section>
  );
};

export default Book;
