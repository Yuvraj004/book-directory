// Book.js
import React, { useState } from 'react';

const Book = ({ _id, title, author, publishedYear, updateBook, deleteBook }) => {
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(title);
  const [updatedAuthor, setUpdatedAuthor] = useState(author);
  const [updatedPublishedYear, setUpdatedPublishedYear] = useState(publishedYear);

  const handleUpdate = () => {
    const updatedData = {
      title: updatedTitle,
      author: updatedAuthor,
      publishedYear: updatedPublishedYear,
    };
    updateBook(_id, updatedData);
    setShowUpdateForm(false);
  };

  const handleDelete = () => {
    deleteBook(_id);
  };

  return (
    <div className="book">
      {showUpdateForm ? (
        <div className='container d-flex flex-column text-center align-items-center justify-content-between mt-2'>
          <div className='row m-2'>
            <input
            type="text"
            value={updatedTitle}
            onChange={(e) => setUpdatedTitle(e.target.value)}
          /></div>

          <div className='row m-2'><input
            type="text"
            value={updatedAuthor}
            onChange={(e) => setUpdatedAuthor(e.target.value)}
          /></div>

          <div className='row m-2'>
            <input
            type="text"
            className="form-control"
            value={updatedPublishedYear}
            onChange={(e) => setUpdatedPublishedYear(e.target.value)}
          /></div>
          <div className='container d-flex flex-row text-center justify-content-evenly '>
            <button className='btn btn-primary' onClick={handleUpdate}>Save</button>
            <button className='btn btn-primary' onClick={() => setShowUpdateForm(false)}>Cancel</button>
          </div>
          
        </div>
      ) : (
        <div className='col'>
          <div className="card text-center mb-3" style={{width: "18rem"}}>
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text"> 
                <p>By: {author}</p>
                <p>Published: {publishedYear}</p>
              </p>
              <button style={{float:"left"}} className='btn btn-primary' onClick={() => setShowUpdateForm(true)}>Update</button>
              <button style={{float:"right"}} className='btn btn-primary' onClick={handleDelete}>Delete</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Book;