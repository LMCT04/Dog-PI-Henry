import {
    GET_DOGS,
    GET_DETAIL_DOG,
    GET_DOG_BY_NAME,
    GET_TEMPERAMENTS,
    CLEAR_DETAIL,
    FILTER_CREATED,
    ORDER_BY_NAME,
    FILTER_TEMPERAMENT,
} from './actions'


const initialState = {
    dogs: [],
    copyDogs: [],
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
                copyDogs: action.payload
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
    case FILTER_CREATED:
        const allDog = state.copyDogs
        let createdFilter

        if(action.payload === 'created') {
            createdFilter = allDog.filter((dog) => dog.created)
        } else if (action.payload === 'existing') {
            createdFilter = allDog.filter((dog) => !dog.created)
        }

        return {
            ...state,
            dogs: createdFilter || allDog
        }
    //----------------------------------
    case ORDER_BY_NAME:
        const allDog1 = state.dogs.slice()
        const Asc = action.payload === 'asc'
        allDog1.sort((a, b) => {
            const nameA = a.name.toLowerCase()
            const nameB = b.name.toLowerCase()
            return Asc ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA)
        })

        return {
            ...state,
            dogs: allDog1,
        }
    //----------------------------------
    case FILTER_TEMPERAMENT:
            const allDogs = state.copyDogs;
            let typesFiltered

            if(action.payload === 'All'){
                typesFiltered = allDogs
            } else{
                typesFiltered = allDogs.filter(dog => {
                    const temperaments = dog.temperaments.split(', ')

                    return temperaments.map(t => t.toLowerCase()).includes(action.payload.toLowerCase())
                })
            }
            return {
                ...state,
                dogs: typesFiltered
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