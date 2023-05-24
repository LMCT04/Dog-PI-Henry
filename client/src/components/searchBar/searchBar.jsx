import { useState } from 'react'
import { useDispatch } from 'react-redux'
import style from './searchBar.module.css'
import { getDogbyName } from '../../redux/actions'

const SearchBar = () => {
    const dispatch = useDispatch()
    const [name, setName] = useState('')

    const handlerInputChange = (event) => {
        setName(event.target.value)
    }

    const handlerSubmit = (event) => {
        event.preventDefault()
        dispatch(getDogbyName(name))
    }

    return(
        <div className={style.SearchBarContainer} >
            <form onSubmit={handlerSubmit} >
                <input
                    type='text'
                    placeholder='enter dog...'
                    onChange={handlerInputChange}
                    className={style.input}
                />
                <button className={style.button} type='submit'  > SEARCH </button>
            </form>
        </div>
    )
}

export default SearchBar