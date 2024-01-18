import style from './navBar.module.css'
import { Link } from "react-router-dom"
import iconImage from '../images/icono_Landing.jpeg'
import SearchBar from '../searchBar/searchBar'


const NavBar = () => {
    return (
        <>
            <div className={style.background}>
                <div className={style.box1}>
                    <div className={style.imgContainer}>
                        <Link to='/'  className={style.boxImg}>
                            <img src={iconImage} alt="icon" className={style.img}  />
                        </Link>
                    </div>
                    <div className={style.btnContainer}>
                        <Link to='/home' className={style.btn}> HOME </Link>
                        <Link to='/form' className={style.btn}> FORM </Link>
                    </div>
                </div>
                <div className={style.box2}>
                    <SearchBar/>
                </div>
            </div>
        </>
    );
};

export default NavBar;