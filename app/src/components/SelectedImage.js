import React from 'react';
import { useSelector } from 'react-redux'


function SelectedImage() {
 const selectedImgUrl = useSelector( state => state.selectedImgUrl)
  return (
    <div className="backdrop">
      <div className='selected-image'>
          <img src={selectedImgUrl} alt='random'/>
      </div>
    </div>
  );
}

export default SelectedImage;