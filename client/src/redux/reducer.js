import {
    GET_DOGS,
    GET_DETAIL_DOG,
    GET_DOG_BY_NAME,
    GET_TEMPERAMENTS,
    CLEAR_DETAIL,
} from './actions'


const initialState = {
    dogs: [],
    temperaments: [],
    detail: [],
}

const rootReducer = (state=initialState, action) => {
    switch (action.type) {
    //----------------------------------
        case GET_DOGS:
            return {
                ...state,
                dogs: action.payload,
            }
    //----------------------------------
        case GET_DETAIL_DOG:
            return {
                ...state,
                detail: action.payload,
            }
    //----------------------------------
        case GET_DOG_BY_NAME:
            return {
                ...state,
                dogs: action.payload,
            }
    //----------------------------------
        case GET_TEMPERAMENTS:
            return {
                ...state,
                temperaments: action.payload,
            }
    //----------------------------------
    case CLEAR_DETAIL:
        return { 
            ...state,
            detail: '',
        }
    //----------------------------------
        default:
            return {
                ...state,
            }
    //----------------------------------
    }
}

export default rootReducer