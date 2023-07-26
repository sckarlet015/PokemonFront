import style from "./Home.module.css"

export default function Home(props){
    return(
        <div className={style.fondo}>
            <h1 className={style.title}>PoKéMoN</h1>
            <button onClick={props.entrar} className={style.btn}>
                Entrar
            </button>
        </div>
    )
}