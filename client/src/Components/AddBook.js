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
      await axios.post('http://localhost:5000/books/createBook', newBook);
      window.location.reload(); // Simple reload for now
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="add-book">
      <h2>Add Book</h2>
      <form onSubmit={handleSubmit} className='col align-items-center'>
        <div className="row mb-3 col-md-6">
          <label htmlFor="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-lg">Title: </label>
          <div className="col-sm-10">
            <input className="form-control form-control-lg" id="colFormLabelSm" placeholder="Book Title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
          </div>
        </div>
        <div className="row mb-3 col-md-6">
          <label htmlFor="colFormLabel" className="col-sm-2 col-form-label form-control-lg">Author: </label>
          <div className="col-sm-10">
            <input  className="form-control form-control-lg" id="colFormLabel" placeholder="Author" type="text" value={author} onChange={(e) => setAuthor(e.target.value)} required/>
          </div>
        </div>
        <div className="row col-md-6">
          <label htmlFor="colFormLabelLg" className="col-sm-2 col-form-label col-form-label-lg">Published Year:</label>
          <div className="col-sm-10">
            <input  className="form-control form-control-lg" id="colFormLabelLg" placeholder="col-form-label-lg" type="number" value={publishedYear} onChange={(e) => setPublishedYear(e.target.value)} required />
          </div>
        </div>
        <button className='btn btn-primary' type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
