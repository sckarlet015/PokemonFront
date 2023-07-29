import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import './App.css';
import axios, { all } from "axios"
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getAllPokemon } from './redux/actions/getAllPokemon';
import Cards from './components/Cards/Cards';
import Home from './components/Home/Home';
import Nav from './components/Nav/Nav';
import Search from './components/Search/Search';
import Detail from './components/detail/Detail';
import { getAllTypes } from './redux/actions/getAllTypes';


function App() {
  const allPokes = useSelector(state => state.allPokemons)
  const allTypes = useSelector(state => state.allTypes)
  const dispatch = useDispatch();
  const [pokemons, setPokemons] = useState([])
  const [pokeBuscado, setPokeBuscado] = useState({})
  const navigate = useNavigate();
  const location = useLocation();
  console.log(allPokes);
  useEffect(() => {
    if (pokemons.length === 0) {
      dispatch(getAllPokemon());
      dispatch(getAllTypes());
    }
  }, [dispatch, pokemons]);

  function handleClick() { //Funcion del boton Entrar
    navigate("/pokemons")
  }
  console.log(pokeBuscado);

  useEffect(() => {
    setPokemons(allPokes);
  }, [allPokes]);

  async function buscar(inputValue) {
    // Validar si es solo letras
    if (/^[a-zA-Z]+$/.test(inputValue)) {
      let poke = await axios(`http://localhost:3001/pokemon/name?name=${inputValue}`)
        .then(response => response.data)
        .then(data => data[0])
        console.log(poke);
      setPokeBuscado(poke)
      return poke
    }
    // Validar si es solo numeros
    if (/^\d+$/.test(inputValue)) {
      let poke = await axios(`http://localhost:3001/pokemon/${inputValue}`)
        .then(response => response.data)
        .then(data => data)
        console.log(poke);
        setPokeBuscado(poke)
        return poke
    }
    return null;
  }

  return (
    <div className="App">
      {location.pathname !== '/' && <Nav/>}
      <Routes>
      <Route
          path='/'
          element={<Home entrar={handleClick} />}
        />
        <Route
          path="/pokemons"
          element={<Cards pokemons={pokemons} allTypes={allTypes} buscar={buscar} pokeBuscado={pokeBuscado}/>}
        />
        <Route
        path='/search'
        element={<Search pokeBuscado={pokeBuscado}/>}
        />
        <Route
        path='/detail/:name'
        element={<Detail allPokes={allPokes}/>}
        />
      </Routes>
    </div>
  );
}

export default App;

