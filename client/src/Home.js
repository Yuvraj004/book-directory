import React from 'react';
import { Link } from 'react-router-dom';
import bookPic from './assets/img/book.png';
const Home = () => {
  return (
    <div className="container text-center mt-5">
      <div className='row align-items-center justify-content-center'>
        <div className='col'>
          <img style={{width:"100%"}} src={bookPic} alt="Book Icon" />
        </div>

        <div className='col'>
          <h1>Welcome to the Book Directory!</h1>
          <p>This website allows you to manage your book collection. You can add, update, delete, and view all your books in a convenient way.</p>
          <Link to="/books" ><button className='btn btn-primary'>GetBooks</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
