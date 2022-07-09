import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
const author = { name: "Oluegwu" }

ReactDOM.render(
  <>
    <App author={author} />
  </>,
  document.getElementById('root')
);

