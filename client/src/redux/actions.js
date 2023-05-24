import axios from 'axios'


//------------------------------------------------------------
export const GET_DOGS = 'GET_DOGS'
export const GET_DETAIL_DOG = 'GET_DETAIL_DOG'
export const CLEAR_DETAIL = 'CLEAR_DETAIL'
export const GET_TEMPERAMENTS = 'GET_TEMPERAMENTS'
export const GET_DOG_BY_NAME = 'GET_DOG_BY_NAME'
export const FILTER_CREATED = 'FILTER_CREATED'
export const ORDER_BY_NAME = 'ORDER_BY_NAME'
export const FILTER_TEMPERAMENT = 'FILTER_TEMPERAMENT'

const URL = 'http://localhost:3001'
//------------------------------------------------------------
export const getDog = () => {
    return async function (dispatch) {
        try {
            const apiData = await axios.get(`${URL}/dog`)
            const dogs = apiData.data
            dispatch ({
                type: GET_DOGS,
                payload: dogs,
            })
        } catch (error) {
            return console.log('Error Action_getDog')
        }
    }
}
//------------
export const getDetailDog = (id) => {
    return async function (dispatch) {
        try {
            const apiData = await axios.get(`${URL}/dog/${id}`)
            const byID = apiData.data
            return dispatch ({
                type: GET_DETAIL_DOG,
                payload: byID,
            })
        } catch (error) {
            return console.log('Error Action_getDetail')
        }
    }
}
//------------
export const getTemperaments = () => {
    return async function (dispatch) {
        try {
            const apiData = await axios.get(`${URL}/temperament`)
            const temperaments = apiData.data.map(temp => temp.name);
            dispatch ({
                type: GET_TEMPERAMENTS,
                payload: temperaments,
            })
        } catch (error) {
            return console.log('Error Action_getTemperaments')
        }
    }
}
//------------
export const getDogbyName = (name) => {
    return async function (dispatch) {
        try {
            const apiData = await axios.get(`${URL}/dog?name=${name}`)
            const byNAME = apiData.data
            return dispatch ({
                type: GET_DOG_BY_NAME,
                payload: byNAME,
            })
        } catch (error) {
            return console.log('Error Action_getDogbyName')
        }
    }
}
//------------
export const clearDetail = () => {
    return {
        type: CLEAR_DETAIL,
    }
}

export const filterCreated = (payload) => {
    return {
        type: FILTER_CREATED,
        payload,
    }
}

export const ordeByName = (payload) => {
    return {
        type: ORDER_BY_NAME,
        payload,
    }
}

export const filterTemperaments = (payload) => {
    return {
        type: FILTER_TEMPERAMENT, payload
    }
}


