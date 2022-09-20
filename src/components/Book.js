/* eslint-disable react/no-array-index-key */
import React from 'react';
import { useSelector } from 'react-redux';

const Book = () => {
  const books = useSelector((state) => state.bookReducer);
  console.log(books);
  const book = books.map((book, index) => (
    <h1 key={index}>{book}</h1>
  ));

  return (
    <section>
      <div>
        {book}
        <p>Book Author</p>
      </div>
      <button type="button">Remove</button>
    </section>
  );
};

export default Book;
