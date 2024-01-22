import style from './landing.module.css'
import { Link } from 'react-router-dom'


const Landing = () => {
    return(
        <div className={style.landingContainer} >
            <div className={style.titleContainer} >
                <h1 className={style.title} > WELCOME TO MY DOGS API </h1>
            </div>
            <Link to='/home'>
                <div className={style.buttonContainer} >
                    <button className={style.button} > ENTER </button>
                </div>
            </Link>
        </div>
    )
}

export default Landing