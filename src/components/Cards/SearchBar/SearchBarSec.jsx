import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const SearchBarSec = ({ allTypes, orderChange, handleSearch, handleReset, handlerFilterType, buscar }) => {
  const [selectedType, setSelectedType] = useState('');
  const [search, setSearch] = useState("")

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
    handlerFilterType(event.target.value); // Renombrado a handlerFilterType para ser coherente con el nombre de la función
  };

  const handleSearchChange = (event) => {
    handleSearch(event.target.value);
    setSearch(event.target.value)
  };

  const changeSearch = () => {
    buscar(search)
  }

  return (
    <div>
      <label htmlFor="pokemonType">Type:</label>
      <select id="pokemonType" value={selectedType} onChange={handleTypeChange}>
        <option value="">All Types</option>
        {allTypes.map((type) => (
          <option key={type.id} value={type.nombre}>
            {type.nombre}
          </option>
        ))}
      </select>

      <label htmlFor="searchQuery">Search:</label>
      <input
        type="text"
        id="searchQuery"
        placeholder="Search Pokemon..."
        onChange={handleSearchChange}
      />
     <Link to={"/search"}>
     <button onClick={changeSearch}>Mas Resultados</button>
     </Link>
      <button onClick={handleReset}>Reset</button>
      <button onClick={() => orderChange('AtoZ')}>Name &#8593;</button>
      <button onClick={() => orderChange('ZtoA')}>Name &#8595;</button>
      <button onClick={() => orderChange('AtkAsc')}>Atk &#8593;</button>
      <button onClick={() => orderChange('AtkDesc')}>Atk &#8595;</button>
      <button onClick={() => orderChange('DefAsc')}>Def &#8593;</button>
      <button onClick={() => orderChange('DefDesc')}>Def &#8595;</button>
    </div>
  );
};

export default SearchBarSec;
