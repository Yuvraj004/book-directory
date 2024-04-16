import React from 'react';
import { Link } from 'react-router-dom';
import bookPic from './assets/img/book.png';
const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to the Book Directory!</h1>
      <p>This website allows you to manage your book collection. You can add, update, delete, and view all your books in a convenient way.</p>
      <img src={bookPic} alt="Book Icon" />
      <Link to="/books" ><button>GetBooks</button></Link>
    </div>
  );
};

export default Home;
