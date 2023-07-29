import { NavLink } from "react-router-dom"
import style from "./Card.module.css"

export default function Card(props) {

  
  const handlerHeight = () => {
    let height = props.altura * 10;
    if(height < 100){
     return 100
    }
    if(height > 101 && height < 150){
      return 150
     }
     if(height > 200){
      return 220
     }
     return height
  }

  const hadlerPading = () => {
    const padingTop = props.altura * 10
    if(padingTop < 200){
      return 50
    }
    else{
      return 1
    }
  }
  return (
    <div className={style.card}>
      <p className={style.id}>Pokedex iD: {props.id}</p>
      <div className={style.contImg}>
      <NavLink
        to={`/detail/${props.name}`}>
          <img src={props.image} alt="Pokemon" style={{ height: `${handlerHeight()}px`, paddingTop: `${hadlerPading()}px` }}/>
        </NavLink>
      </div>
      <div className={style.info}>
        <NavLink
        to={`/detail/${props.name}`}>
          <h1 className={style.name}>{props?.name?.toUpperCase()}</h1>
        </NavLink>
        <div className={style.contStat}>
        <p className={style.stat}>Ata: {props.ataque}</p>
        <p className={style.stat}>Def: {props.defensa}</p>
        <p className={style.stat}>Vel: {props.velocidad}</p>
        <p>{handlerHeight()}</p>
        </div>
      </div>
      <div className={style.type}>
        <span className={style.grass}>{props.tipo1}</span>
        <span className={style.poison}>{props.tipo2}</span>
      </div>
    </div>
  )
}