import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch();
  // const books = useSelector((state) => state.bookReducer.data);
  // console.log(books.length);
  const bookObj = {
    title: '',
    author: '',
    id: uuidv4(),
    // id: books.length === 2 ? books.id += 2 : books[books.length - 1].id += 1,
  };
  const [state, setState] = useState(bookObj);

  const handleChange = (e) => {
    setState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state.id);
    dispatch(addBook(state.title, state.author, state.id));
    setState(bookObj);
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
