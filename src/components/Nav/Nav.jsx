import React from "react";
import style from "./Nav.module.css"
import { NavLink } from "react-router-dom";

export default function Nav(props) {

    return (
        <div className={style.NavBar}>
            <NavLink to={"/pokemons"} className={style.link}>
                <p className={style.tex}>POKEMONS</p>
            </NavLink>
            <NavLink to={"/create"} className={style.link}>
            <p className={style.tex}>CRAR</p>
            </NavLink>
            <NavLink to={"/favorites"} className={style.link}>
            <p className={style.tex}>FAVORITOS</p>
            </NavLink>
            <NavLink to={"/acerca"} className={style.link}>
            <p className={style.tex}>ACERCA DE</p>
            </NavLink>
        </div>
    )
}