import Card from '../card/card.jsx';
import style from './cardsContainer.module.css';
import { useSelector } from 'react-redux';
import Paginated from '../paginated/paginated.jsx';
import { useState, useEffect } from 'react';

const CardsContainer = () => {
  const allDogs = useSelector(state => state.dogs);
  const [dogs, setDogs] = useState(allDogs);
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);
  const showPerPage = 10;
  const lastOnPage = page * showPerPage;
  const firstOnPage = lastOnPage - showPerPage;
  const showDogs = dogs.slice(firstOnPage, lastOnPage);

  const handleChange = event => {
    setSearchTerm(event.target.value);
    setPage(1); // Reinicia la página a 1 cuando se realiza una nueva búsqueda
  };

  useEffect(() => {
    // Filtra los perros en función del término de búsqueda
    const filteredDogs = allDogs.filter(dog =>
      dog.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setDogs(filteredDogs);
    setPage(1); // Reinicia la página a 1 después de filtrar
  }, [allDogs, searchTerm]);

  const paginate = pageNumber => {
    setPage(pageNumber);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Buscar por nombre"
        />
      </div>
      <div className={style.container}>
        {showDogs.map(d => (
          <Card id={d.id} key={d.id} image={d.image} name={d.name} />
        ))}
      </div>
      <Paginated
        showPerPage={showPerPage}
        pokemons={dogs.length}
        paginate={paginate}
        page={page}
      />
    </div>
  );
};

export default CardsContainer;
