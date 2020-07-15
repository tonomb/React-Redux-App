
import axios from 'axios'

export const IMAGE_SUCCESS = 'IMAGE_SUCCESS'

export const fetchImage = () => {
    return dispatch =>{
        axios.get('https://picsum.photos/v2/list')
            .then( res =>{
                console.log(res.data);
                dispatch({type: IMAGE_SUCCESS, payload: res.data})
            })
            .catch( err =>{
                console.log(err);
            })
    }
}