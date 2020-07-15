import React, {useRef, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux'


import {unseletImage} from '../store/actions'


function SelectedImage() {
 const selectedImgUrl = useSelector( state => state.selectedImgUrl);
 const dispatch = useDispatch()

  return (
    <div 
        onClick={()=>dispatch(unseletImage())} 
        className="backdrop">
      <div className='selected-image'>
          <img 
            src={selectedImgUrl} alt='random'/>
      </div>
    </div>
  );
}

export default SelectedImage;