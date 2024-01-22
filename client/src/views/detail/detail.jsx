import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { clearDetail, getDetailDog } from "../../redux/actions";
import style from "./detail.module.css";
import Loading from "../../components/loading/loading";

const Detail = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    console.log("ID del perro:", id);
    const dog = useSelector((state) => state.detail);

    useEffect(() => {
        dispatch(clearDetail());
        dispatch(getDetailDog(id));
    }, [dispatch, id]);

    console.log(dog);

    return (
        <>
            <div className={style.background}>
                {
                    dog.name ? (
                        <>
                            <div className={style.box}>
                                <div className={style.boxImg}>
                                    <img src={dog.image} alt="image"/>
                                </div>
                                <div className={style.boxDetail}>
                                    <div className={style.boxInfo}>
                                        <div className={style.info}>
                                            <label className={style.lb}>
                                            {'Breed: '}{dog.name}
                                            </label>
                                            <label className={style.lb}>
                                            {'Height: '}{dog.height}
                                            </label>
                                            <label className={style.lb}>
                                            {'Weight: '}{dog.weight}
                                            </label>
                                            <label className={style.lb}>
                                                {'Life Span: '}{dog.lifeSpan}
                                            </label>
                                        </div>
                                    </div>
                                    <div className={style.boxTemps}>
                                        <h2> Temperaments </h2>
                                        <ul>
                                            {
                                                Array.isArray(dog.temperaments)
                                                ? dog.temperaments.map((temp, index) => (
                                                    <li key={index}>{temp.name} </li>
                                                ))
                                                : dog.temperaments.split(", ").map((temp, index) => (
                                                    <li key={index}>{temp} </li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <Loading/>
                        </>
                    )
                }
            </div>
        </>
        // <div className={style.detailContainer}>
        //     {dog.name ? (
        //         <div className={style.container}>
        //             <div className={style.imgContainer}>
        //                 <img
        //                     src={dog.image}
        //                     alt="not found"
        //                     className={style.image}
        //                 />
        //             </div>
        //             <div className={style.contentContainer}>
        //                 <div className={style.content}>
        //                     <label className={style.label}>
        //                         {" "}
        //                         Breed: {dog.name}{" "}
        //                     </label>
        //                 </div>
        //                 <div className={style.content}>
        //                     <label className={style.label}>
        //                         {" "}
        //                         ID: {dog.id}{" "}
        //                     </label>
        //                 </div>
        //                 <div className={style.content}>
        //                     <label className={style.label}>
        //                         {" "}
        //                         Height: {dog.height}{" "}
        //                     </label>
        //                 </div>
        //                 <div className={style.content}>
        //                     <label className={style.label}>
        //                         {" "}
        //                         Weight: {dog.weight}{" "}
        //                     </label>
        //                 </div>
        //                 <div className={style.content}>
        //                     <label className={style.label}>
        //                         {" "}
        //                         Life Span: {dog.lifeSpan}{" "}
        //                     </label>
        //                 </div>
        //                 <div className={style.content}>
        //                     <label className={style.label}>
        //                         {" "}
        //                         Temperaments:{" "}
        //                     </label>
        //                     <label className={style.label2}>
        //                         {Array.isArray(dog.temperaments)
        //                             ? dog.temperaments.map((temp, index) => (
        //                                     <span key={index}>{temp.name} </span>
        //                             ))
        //                             : dog.temperaments
        //                                     .split(", ")
        //                                     .map((temp, index) => (
        //                                         <span key={index}>{temp} </span>
        //                                 ))}{" "}
        //                     </label>
        //                 </div>
        //             </div>
        //         </div>
        //     ) : (
        //         <p>hola no hay bnada</p>
        //     )}
        // </div>
    );
};

export default Detail;
