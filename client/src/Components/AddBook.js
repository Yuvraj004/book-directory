import React, { useState } from 'react';
import axios from 'axios';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishedYear, setPublishedYear] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newBook = { title, author, publishedYear };
      await axios.post('/api/books/createBook', newBook);
      window.location.reload(); // Simple reload for now
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="add-book">
      <h2>Add Book</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <label>Author:</label>
        <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} required />
        <label>Published Year:</label>
        <input type="number" value={publishedYear} onChange={(e) => setPublishedYear(e.target.value)} required />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
