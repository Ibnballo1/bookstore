import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBooks } from '../redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleAuthor = (e) => {
    setAuthor(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      title,
      author,
      id: uuidv4(),
      category: 'Action',
    };

    dispatch(addBooks(newBook));
    setTitle('');
    setAuthor('');
  };

  return (
    <section>
      <h2 className="add-book">ADD NEW BOOK</h2>
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="titles"
          type="text"
          name="title"
          onChange={handleTitle}
          id="title"
          placeholder="Book title"
          value={title}
        />
        <input
          className="authors"
          type="text"
          name="author"
          onChange={handleAuthor}
          id="author"
          placeholder="Book Author"
          value={author}
        />
        <button
          className="submitBtn"
          type="submit"
        >
          ADD BOOK
        </button>
      </form>
    </section>
  );
};

export default AddBook;
