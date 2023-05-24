import Card from '../card/card.jsx';
import style from './cardsContainer.module.css';
import { useDispatch, useSelector } from 'react-redux';
import Paginated from '../paginated/paginated.jsx';
import { useState } from 'react';
import { filterCreated, ordeByName } from "../../redux/actions.js"

const CardsContainer = () => {
  const allDogs = useSelector(state => state.dogs);
  const dispatch = useDispatch()
  const [page, setPage] = useState(1);
  const showPerPage = 10;
  const lastOnPage = page * showPerPage;
  const firstOnPage = lastOnPage - showPerPage;
  const showDogs = allDogs.slice(firstOnPage, lastOnPage);


  const paginate = pageNumber => {
    setPage(pageNumber);
  };


  const handlerFiltCreated = (event) => {
    dispatch(filterCreated(event.target.value))
    setPage(1)
  }

  const handlerSort = (event) => {
    dispatch(ordeByName(event.target.value))
    setPage(1)
  }

  const handlerCleanFilters = (event) => {
    event.preventDefault()
    window.location.reload() 
  }

  return (
    <div>
      <select className={style.filter}  onChange={handlerSort}>
        <option value="asc">ORDER A - Z</option>
        <option value="des">ORDER Z - A</option>
      </select>

      <select className={style.filter} onChange={handlerFiltCreated} >
        <option value="created">CREATED</option>
        <option value="existing">EXISTING</option>              
      </select>

      <button
        className={style.filter}
					type="button"
					onClick={handlerCleanFilters}
      > Restore </button>

      <div className={style.container}>
        {showDogs.map(d => (
          <Card id={d.id} key={d.id} image={d.image} name={d.name} />
        ))}
      </div>
      <Paginated
        showPerPage={showPerPage}
        dogs={allDogs.length}
        paginate={paginate}
        page={page}
      />
    </div>
  );
};

export default CardsContainer;

