import React from 'react';
import {useDispatch} from 'react-redux';
import {selectImage} from '../store/actions'

function Image({image}){
    const dispatch = useDispatch();
    return(
        
        <div className='image-container' onClick={()=>dispatch(selectImage(image.download_url))}>
            <img className='image' src={image.download_url} alt='pic' />
        </div>    
                    
    )
}

export default Image;