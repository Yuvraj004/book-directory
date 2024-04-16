// BookList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Book from './Book';

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`http://localhost:5000/books/getBooks`);
      setBooks(response.data);
    };
    fetchData();
  }, []);

  const updateBook = async (id, updatedData) => {
    try {
      await axios.put(`http://localhost:5000/books/updateBook/${id}`, updatedData);
      fetchBookList();
    } catch (error) {
      console.error('Error updating book:', error);
    }
  };

  const deleteBook = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/books/deleteBook/${id}`);
      fetchBookList();
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  const fetchBookList = async () => {
    const response = await axios.get(`http://localhost:5000/books/getBooks`);
    setBooks(response.data);
  };

  return (
    <div className="book-list">
      <h2>Book Directory</h2>
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
  );
};

export default BookList;