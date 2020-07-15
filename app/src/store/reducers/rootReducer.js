import * as ACTIONS from '../actions'

const initialState = {
    isLoading: false,
    images: [],
    error:''
}

export const rootReducer = (state = initialState, action) =>{
    switch(action.type){
        case ACTIONS.IMAGE_SUCCESS:
            return {
                ...state,
                images: action.payload
            }
        default:
            return state
    }
}