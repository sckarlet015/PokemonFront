import { useEffect, useState } from "react";
import React from 'react';
import style from './Detail.module.css';
import { useParams, useNavigate } from "react-router-dom";

const Detail = ({ allPokes }) => {

  const [pokemon, setPokemon] = useState({})
  const { name } = useParams();

  useEffect(() => {
    const foundPokemon = allPokes.find(poke => poke.name === name);
    if (foundPokemon) {
      setPokemon(foundPokemon);
    } else {
      console.log(`No se encontró el Pokemon con el nombre ${name}`);
    }
  }, [allPokes, name]);

  return (
    <div className={style.container}>
      <div className={style.contImg}>
        <div className={style.contImgUno}>
          <img className={style.imgUno} src={pokemon.imageSVG} alt={pokemon.name} />
        </div>
        <div className={style.contImgDos}>
          <img className={style.imgDos} src={pokemon.imageFront} alt={pokemon.name} />
          <img className={style.imgDos} src={pokemon.imageBack} alt={pokemon.name} />
        </div>
      </div>
      <div className={style.contDetail}>
        <div className={style.contTitle}>
        <p className={style.pokemonName}>{pokemon.name}</p>
        </div>
        <div className={style.contTitle}>
          <p className={style.pokedex}>Pokedex ID: {pokemon.apiID}</p>
        </div>
        <div className={style.pokemonDescription}>
          <p className={style.descrition}>
            Este es un Pokemon de tipo <b>{pokemon.Tipos && pokemon.Tipos[0]?.nombre}</b>  y tiene
            una vida de {pokemon.vida}, un ataque de {pokemon.ataque}, una defensa de {pokemon.defensa} y una
            velocidad de {pokemon.velocidad}. Su altura es de {pokemon.altura} decímetros y su peso es de {pokemon.peso} hectogramos.
          </p>
        </div>
        <div className={style.pokemonStats}>
          <div className={style.pokemonStat}>Vida: {pokemon.vida}</div>
          <div className={style.pokemonStat}>Ataque: {pokemon.ataque}</div>
          <div className={style.pokemonStat}>Defensa: {pokemon.defensa}</div>
          <div className={style.pokemonStat}>Velocidad: {pokemon.velocidad}</div>
          <div className={style.pokemonStat}>Altura: {pokemon.altura}</div>
          <div className={style.pokemonStat}>Peso: {pokemon.peso}</div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
