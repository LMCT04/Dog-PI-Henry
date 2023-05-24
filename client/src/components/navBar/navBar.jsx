import style from './navBar.module.css'
import { Link } from "react-router-dom"
import iconImage from '../images/icono_Landing.jpeg'
import SearchBar from '../searchBar/searchBar'


const NavBar = () => {
    return(
        <div className={style.navBarContainer} >
            <Link to='/' className={style.icon}>
                <img src={iconImage} alt="Icono" className={style.iconImage} ></img>
            </Link>
            <Link to='/home'>
                <div className={style.buttonContainer} >
                    <button className={style.button} > HOME </button>
                </div>
            </Link>
            <Link to='/form'>
                <div className={style.buttonContainer} >
                    <button className={style.button} > FORM </button>
                </div>
            </Link>
            <SearchBar/>
        </div>
    )
}

export default NavBar