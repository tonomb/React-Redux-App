import React from 'react';
import {useSelector} from 'react-redux';

import "reset-css"; 
import './App.scss';

import ImageList from './components/ImageList'
import SelectedImage from './components/SelectedImage'

function App() {
  const isSelected = useSelector( state => state.isSelected)

  return (
    <div className="app">
      <ImageList />
      {isSelected &&  <SelectedImage />}
    </div>
  );
}

export default App;
