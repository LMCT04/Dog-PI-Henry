import CardsContainer from '../../components/cardsContainer/cardsContainer'
import style from './home.module.css'
import { useEffect } from "react"
import { useDispatch } from 'react-redux'
import { getDog, getTemperaments } from '../../redux/actions'


const Home = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDog())
        dispatch(getTemperaments())
    },[dispatch])

    return(
        <div className={style.homeContainer} >
            <div className={style.epigraphContainer} >
                <p className={style.epigraph} > SATISFY YOUR CURIOSITY BY SEARCHING FOR ANY DOG IN OUR API </p>
            </div>

            <CardsContainer/>
        </div>
    )
}

export default Home