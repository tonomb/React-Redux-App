import * as ACTIONS from '../actions'

const initialState = {
    isLoading: false,
    images: [],
    error:'',
    isSelected: false,
    selectedImgUrl: ''
}

export const rootReducer = (state = initialState, action) =>{
    switch(action.type){
        case ACTIONS.IMAGE_SUCCESS:
            return {
                ...state,
                images: action.payload
            }
        case ACTIONS.IMAGE_SELECTED:
            return{
                ...state,
                isSelected: true,
                selectedImgUrl: action.payload.url
            }  
        default:
            return state
    }
}