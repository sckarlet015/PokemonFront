import React, { useState } from 'react';
import style from "./SearchBar.module.css"


const SearchBarSec = ({ allTypes, orderChange, handleSearch, handleReset, handlerFilterType }) => {

  const [selectedType, setSelectedType] = useState('');

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
    handlerFilterType(event.target.value);
  };

  const handleSearchChange = (event) => {
    handleSearch(event.target.value);
  };

  return (
    <div className={style.conteiner}>
     <p className={style.tex}>Tipo:</p>
      <select id="pokemonType" className={style.inp} value={selectedType} onChange={handleTypeChange}>
        <option value="">All Types</option>
        {allTypes.map((type) => (
          <option
          key={type.id}
          value={type.nombre}>
            {type.nombre}
          </option>
        ))}
      </select>
      <p className={style.tex}>Buscar:</p>
      <input
        className={style.inp}
        type="text"
        id="searchQuery"
        placeholder="Pokedex ID o Nombre"
        onChange={handleSearchChange}
      />
      <button className={style.btn} onClick={handleReset}>Reset</button>
      <button className={style.btn} onClick={() => orderChange('AtoZ')}>Nombre &#8593;</button>
      <button className={style.btn} onClick={() => orderChange('ZtoA')}>Nombre &#8595;</button>
      <button className={style.btn} onClick={() => orderChange('IdAsc')}>ID &#8593;</button>
      <button className={style.btn} onClick={() => orderChange('IdDesc')}>ID &#8595;</button>
      <button className={style.btn} onClick={() => orderChange('AtkAsc')}>Ata &#8593;</button>
      <button className={style.btn} onClick={() => orderChange('AtkDesc')}>Ata &#8595;</button>
      <button className={style.btn} onClick={() => orderChange('DefAsc')}>Def &#8593;</button>
      <button className={style.btn} onClick={() => orderChange('DefDesc')}>Def &#8595;</button>
    </div>
  );
};

export default SearchBarSec;
