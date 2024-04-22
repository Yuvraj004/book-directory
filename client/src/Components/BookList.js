// BookList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Book from './Book';
const backendUrl = process.env.REACT_APP_BACKEND_URL || 5000;
const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${backendUrl}/books/getBooks`);
      setBooks(response.data);
    };
    fetchData();
  }, []);

  const updateBook = async (id, updatedData) => {
    try {
      await axios.put(`${backendUrl}/books/updateBook/${id}`, updatedData);
      fetchBookList();
    } catch (error) {
      console.error('Error updating book:', error);
    }
  };

  const deleteBook = async (id) => {
    try {
      await axios.delete(`${backendUrl}/books/deleteBook/${id}`);
      fetchBookList();
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  const fetchBookList = async () => {
    const response = await axios.get(`${backendUrl}/books/getBooks`);
    setBooks(response.data);
  };

  return (
    <div className="container d-flex grid flex-column justify-content-center align-items-center text-center">
      <h2>Book Directory</h2>
      <div className='container text-center'>
        <div className='row row-cols-3'>
          {books.map((book) => (
            <Book
              key={book._id}
              _id={book._id}
              title={book.title}
              author={book.author}
              publishedYear={book.publishedYear}
              updateBook={updateBook}
              deleteBook={deleteBook}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookList;