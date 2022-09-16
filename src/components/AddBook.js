import React from 'react';

const AddBook = () => (
  <section>
    <h2>ADD NEW BOOK</h2>
    <form>
      <input type="text" id="title" placeholder="Book title" />
      <input type="text" id="author" placeholder="Book Author" />
      <button type="submit">ADD BOOK</button>
    </form>
  </section>
);

export default AddBook;
