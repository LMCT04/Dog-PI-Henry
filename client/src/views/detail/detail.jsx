import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { clearDetail, getDetailDog } from '../../redux/actions'
import style from './detail.module.css'


const Detail = () => {

    const { id } = useParams()
    const dispatch = useDispatch()
    const dog = useSelector(state => state.detail)

    useEffect(() => {
        dispatch(clearDetail())
        dispatch(getDetailDog(id))
    }, [dispatch, id])

    return(
        <div className={style.detailContainer} >
            {dog.name ? (
            <div className={style.container} >
                <div className={style.imgContainer} >
                    <img
                        src={dog.image}
                        alt='not found'
                        className={style.image}
                    />
                </div>
                <div className={style.contentContainer} >
                    <div className={style.content} >
                        <label className={style.label} > Breed: {dog.name} </label>
                    </div>
                    <div className={style.content} >
                        <label className={style.label} > ID: {dog.id} </label>
                    </div>
                    <div className={style.content} >
                        <label className={style.label} > Height: {dog.height} </label>
                    </div>
                    <div className={style.content} >
                        <label className={style.label} > Weight: {dog.weight} </label>
                    </div>
                    <div className={style.content} >
                        <label className={style.label} > Life Span: {dog.lifeSpan} </label>
                    </div>
                    <div className={style.content} >
                        <label className={style.label} > Temperaments: {dog.temperament} </label>
                    </div>
                </div>
            </div>
            ) : (<p></p>
            )}
        </div>
    )
}

export default Detail