/* eslint-disable react/no-array-index-key */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeBook } from '../redux/books/books';

const score = [60, 8, 0];
const Book = () => {
  const books = useSelector((state) => state.bookReducer);
  const dispatch = useDispatch();

  return (
    <section className="bookSection">
      {
        books.map((book, index) => {
          const newScore = [];

          function randomScore() {
            const num = Math.floor((Math.random() * 100));
            newScore.push(num);
            if (index <= 2) {
              return `${score[index]}%`;
            }
            return `${newScore}%`;
          }

          return (
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
                <div className="grade-box">
                  <div className="grade" />
                </div>
                <div className="complete-score">
                  <h2 className="score">
                    {
                      randomScore()
                    }
                  </h2>
                  <p className="completed">Completed</p>
                </div>
              </div>
              <div className="divider" />
              <div className="currentChapter">
                <h3 className="current-chapter">Current Chapter</h3>
                <p className="chapters">Chapter 17</p>
                <button type="button" className="progressBtn">Update Progress</button>
              </div>
            </div>
          );
        })
      }
    </section>
  );
};

export default Book;
