import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Book from './Book'; // Import Book component
const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`http://localhost:5000/books/getBooks`);
      setBooks(response.data);
    };

    fetchData();
  }, []);

  return (
    <div className="book-list">
      <h2>Book Directory</h2>
      {books.map((book) => (
        <Book key={book._id} {...book} /> // Pass book data to Book component
      ))}
    </div>
  );
};

export default BookList;
