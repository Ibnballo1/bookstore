import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch();
  const bookObj = {
    title: '',
    author: '',
    id: uuidv4(),
  };
  const [state, setState] = useState(bookObj);
  console.log(state);

  const handleChange = (e) => {
    setState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook(state.title, state.author));
    // setState(state);
  };

  return (
    <section>
      <h2>ADD NEW BOOK</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          onChange={handleChange}
          id="title"
          placeholder="Book title"
          value={state.title}
        />
        <input
          type="text"
          name="author"
          onChange={handleChange}
          id="author"
          placeholder="Book Author"
          value={state.author}
        />
        <button
          type="submit"
        >
          ADD BOOK
        </button>
      </form>
    </section>
  );
};

export default AddBook;
