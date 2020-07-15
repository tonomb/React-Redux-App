import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {fetchImage} from '../store/actions'

import Image from './Image'

function ImageList(props){

    useEffect(()=>{
        props.fetchImage()
    },[])

    return(
        <div className='image-section'>
            {
                props.images.map( image =>{
                    return ( <Image key={image.id} image={image} /> )
                })
            }
        </div>
    )
}

const mapStateToProps = state =>{
    return{
        images: state.images
    }
}

export default connect(mapStateToProps, {fetchImage})(ImageList);