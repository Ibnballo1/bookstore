/* eslint-disable react/no-array-index-key */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = () => {
  const books = useSelector((state) => state.bookReducer);
  const dispatch = useDispatch();

  return (
    <section className="bookSection">
      {
        books.map((book) => (
          <div className="bookContainer" key={book.id}>
            <div className="forBook">
              <h1 className="title">{book.title}</h1>
              <p className="author">{book.author}</p>
              <div className="forInputs">
                <input
                  className="inputs"
                  type="submit"
                  onClick={() => dispatch(removeBook(book.id))}
                  value="Comments"
                />
                <span className="seperator">|</span>
                <input
                  className="inputs"
                  type="submit"
                  onClick={() => dispatch(removeBook(book.id))}
                  value="Remove"
                />
                <span className="seperator">|</span>
                <input
                  className="inputs"
                  type="submit"
                  onClick={() => dispatch(removeBook(book.id))}
                  value="Edit"
                />
              </div>
            </div>
            <div className="forGrade">
              For Grade
            </div>
            <div className="currentChapter">
              For Current Chapter
            </div>
          </div>
        ))
      }
    </section>
  );
};

export default Book;
