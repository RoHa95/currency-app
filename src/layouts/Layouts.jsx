import React from 'react';
import styles from './Layout.module.css';

function Layouts({ children }) {
  return (
    <>
      <header>
        <h1>Crypto App</h1>
        <p>
          <a href="#">RohaDeveloper |React.js </a>
        </p>
      </header>
      {children}
      <footer>
        <p>Developed by Roha with love</p>
      </footer>
    </>
  );
}

export default Layouts;
