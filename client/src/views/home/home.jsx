import CardsContainer from "../../components/cardsContainer/cardsContainer";
import style from "./home.module.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getDog, getTemperaments } from "../../redux/actions";

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDog());
        dispatch(getTemperaments());
    }, [dispatch]);

    return (
        <div className={style.background}>
            {/*<div className={style.epigraphContainer} >
                <p className={style.epigraph} > SATISFY YOUR CURIOSITY BY SEARCHING FOR ANY DOG IN OUR API </p>
            </div>

    <CardsContainer/>*/}
            <div className={style.boxtxt}>
                <p className={style.p}>
                    SATISFY YOUR CURIOSITY BY SEARCHING FOR ANY DOG IN OUR API
                </p>
            </div>
            <div className={style.box}>
                <CardsContainer/>
            </div>
        </div>
    );
};

export default Home;
