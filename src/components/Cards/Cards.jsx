import Card from '../Card/Card';
import style from './Cards.module.css';
import { useState, useEffect} from 'react';
import { order } from './orderFilter';
import SearchBarSec from './SearchBar/SearchBarSec';

export default function Cards(props) {
   const [currentPage, setCurrentPage] = useState(1);
   const { pokemons, allTypes, buscar, pokeBuscado } = props
   const [sortOrder, setSortOrder] = useState("")
   const [getTypes, setGetTypes] = useState("")
   const [searchQuery, setSearchQuery] = useState("")

   useEffect(() => {
      let localOrder = localStorage.getItem("order");
      if (localOrder && localOrder.length > 0) {
         setSortOrder(localOrder);
      }
      let localTypes = localStorage.getItem("type");
      if (localTypes && localTypes.length > 0) {
         setGetTypes(localTypes);
      }
    }, []);

   const handlePreviousPage = () => {
      setCurrentPage(currentPage - 1);
   };
   const handleNextPage = () => {
      setCurrentPage(currentPage + 1);
   };
   const pageSize = 10;
   const startIndex = (currentPage - 1) * pageSize;
   const endIndex = startIndex + pageSize;

   const orderChange = (orderQuery) => {
      setSortOrder(orderQuery)
      localStorage.setItem("order", JSON.stringify(orderQuery))
   }

   const handleSearch = (query) => {
      setSearchQuery(query)
   }

   const handlerFilterType = (type) => {
      setGetTypes(type)
      localStorage.setItem("type", JSON.stringify(type))
   }

   const handleReset = () => {
      setSearchQuery("");
      setGetTypes("");
      setSortOrder("");
      localStorage.removeItem("type");
      localStorage.removeItem("order");
      setCurrentPage(1);
    };

   const orderPokemons = order(pokemons, sortOrder, getTypes, searchQuery, pokeBuscado)

   const noPokemonsFound = orderPokemons.length === 0;

  return (
    <div className={style.DivCards}>
      <div>
        <SearchBarSec
          allTypes={allTypes}
          orderChange={orderChange}
          handleSearch={handleSearch}
          handlerFilterType={handlerFilterType}
          handleReset={handleReset}
          buscar={buscar}
        />
      </div>
      {/* Mostrar mensaje si no hay pokemons encontrados */}
      {noPokemonsFound && <h2>No se encontraron pokemons para estos filtros</h2>}
      {/* Renderizar los pokemons solo si el array no está vacío */}
      {!noPokemonsFound &&
        orderPokemons.slice(startIndex, endIndex).map((ele) => (
          <Card
            name={ele.name}
            id={ele.apiID}
            vida={ele.vida}
            ataque={ele.ataque}
            defensa={ele.defensa}
            velocidad={ele.velocidad}
            altura={ele.velocidad}
            peso={ele.peso}
            image={ele.imageFront}
            tipo1={ele.Tipos[0].nombre}
            tipo2={ele.Tipos[1]?.nombre}
            key={ele.id}
          />
        ))}
      <div>
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          Anterior
        </button>
        <button onClick={handleNextPage} disabled={endIndex >= pokemons.length}>
          Siguiente
        </button>
      </div>
    </div>
  );
}



