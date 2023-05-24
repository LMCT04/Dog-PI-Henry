import style from './card.module.css'
import { Link } from "react-router-dom"

const Card = (props) => {
    return(
        <Link className={style.link} to={`/detail/${props.id}`} >
            <div className={style.card} >
                <div className={style.imgContainer} >
                    <img src={props.image} alt='Not found' width='250px' height='200px' ></img>
                </div>
                <div className={style.contentContainer} >
                    <p className={style.text} > Breed: </p>
                    <p className={style.text} > {props.name} </p>
                </div>
            </div>
        </Link>
    )
}

export default Card
//import { Link } from "react-router-dom"
/*            <Link to={`/detail/${props.id}`} > 
                <div>
                    <p> Breed: {props.name} </p>
                </div>
                <div>
                    <p> Id: {props.id} </p>
                </div>
            </Link>*/


//<img className={style.image}  src={props.image} alt='Not found' width='280px' heigth='300px'></img>
//<p> Breed: {props.name} </p>
