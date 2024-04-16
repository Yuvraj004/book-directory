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
        <div>
          <input
            type="text"
            value={updatedTitle}
            onChange={(e) => setUpdatedTitle(e.target.value)}
          />
          <input
            type="text"
            value={updatedAuthor}
            onChange={(e) => setUpdatedAuthor(e.target.value)}
          />
          <input
            type="text"
            value={updatedPublishedYear}
            onChange={(e) => setUpdatedPublishedYear(e.target.value)}
          />
          <button onClick={handleUpdate}>Save</button>
          <button onClick={() => setShowUpdateForm(false)}>Cancel</button>
        </div>
      ) : (
        <div>
          <h3>{title}</h3>
          <p>By: {author}</p>
          <p>Published: {publishedYear}</p>
          <div className="book-actions">
            <button onClick={() => setShowUpdateForm(true)}>Update</button>
            <button onClick={handleDelete}>Delete</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Book;