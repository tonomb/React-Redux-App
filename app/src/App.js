import React from 'react';

import "reset-css"; 
import './App.scss';

import ImageList from './components/ImageList'

function App() {

  return (
    <div className="app">
      <h1 className='title'>Lorem Picsum API demo</h1>
      <ImageList />
    </div>
  );
}

export default App;
