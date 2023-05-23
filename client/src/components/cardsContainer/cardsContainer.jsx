import Card from '../card/card.jsx'
import style from './cardsContainer.module.css'
import { useSelector } from 'react-redux'

const CardsContainer = () => {

    const dogs = useSelector(state => state.dogs)

    return(
        <div>
            <div className={style.container} >
                {dogs.map(d => {
                    return <Card
                        id= {d.id}
                        key= {d.id}
                        image= {d.image}
                        name= {d.name}
                    />
                })}
            </div>
        </div>
    )
}

export default CardsContainer