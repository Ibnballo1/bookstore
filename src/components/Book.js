/* eslint-disable react/no-array-index-key */
import React from 'react';
import { useSelector } from 'react-redux';

const Book = () => {
  const books = useSelector((state) => state.bookReducer);
  const book = books.map((book, index) => (
    <div key={index}>
      <h1>{book.title}</h1>
      <p>{book.author}</p>
      <button type="button">Remove</button>
    </div>
  ));

  return (
    <section>
      {book}
    </section>
  );
};

export default Book;
