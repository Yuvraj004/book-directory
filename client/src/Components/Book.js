import React from 'react';

const Book = ({ title, author, publishedYear }) => {
  return (
    <div className="book">
      <h3>{title}</h3>
      <p>By: {author}</p>
      <p>Published: {publishedYear}</p>
    </div>
  );
};

export default Book;
