import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {fetchImage} from '../store/actions'

function ImageList(props){

    useEffect(()=>{
        props.fetchImage()
    },[])

    return(
        <div>
            {
                props.images.map( image =>{
                    return (
                        <div  key={image.id}>
                            <img  src={image.download_url} alt='pic' />
                        </div>    
                    )
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