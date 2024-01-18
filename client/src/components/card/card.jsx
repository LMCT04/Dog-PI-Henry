import style from "./card.module.css";
import { Link } from "react-router-dom";

const Card = (props) => {
    return (
        <>
            <Link className={style.background} to={`/detail/${props.id}`} >
                <div className={style.boxImg}>
                    <img src={props.image} alt="Not Found" className={style.img} />
                </div>
                <div className={style.boxTxt}>
                    <p className={style.p}>
                        {props.name}
                    </p>
                </div>
            </Link>
            {/*<Link className={style.link} to={`/detail/${props.id}`} >
                <div className={style.card} >
                    <div className={style.imgContainer} >
                        <img src={props.image} alt='Not found' width='250px' height='200px' ></img>
                    </div>
                    <div className={style.contentContainer} >
                        <p className={style.text} > Breed: </p>
                        <p className={style.text} > {props.name} </p>
                    </div>
                </div>
        </Link>*/}
        </>
    );
};

export default Card;
