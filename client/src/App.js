import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import AddBook from './Components/AddBook';
import BookList from './Components/BookList';
import Navbar from './Navbar';

function App() {
  return (
    <>
      <Navbar/>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-book" element={<AddBook />} />
          <Route path="/books" element={<BookList />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
