import React,{useEffect,useRef} from 'react';
import {useDispatch} from 'react-redux';
import { TimelineLite, Power2} from 'gsap';
import CSSRulePlugin from 'gsap/CSSRulePlugin'
import {selectImage} from '../store/actions'

function Image({image}){
    const dispatch = useDispatch();

    const tl = new TimelineLite();

    let container = useRef(null)
    let picture = useRef(null)
    let pictureReveal = CSSRulePlugin.getRule('.image-container:after')

    useEffect(()=>{
     tl.to(container, 1, {ease: Power2.easeIn})
        .from(picture, 1.6, {scale: 1.8, ease: Power2.easeInOut})
    },[])
    return(
        
        <div ref={ el => container =el } className='image-container' onClick={()=>dispatch(selectImage(image.download_url))}>
            <img ref={el => picture = el } className='image' src={image.download_url} alt='pic' />
        </div>    
                    
    )
}

export default Image;