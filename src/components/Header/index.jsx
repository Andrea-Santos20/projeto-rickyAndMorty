import style from "./Header.module.css";

export default function Header (){

    return (
        <header>

            <ul>
                <li><a href="#">Home</a></li>                
                <li><a href="../CardItem/index.jsx">Personagens</a></li>
                <li><a href="../Footer/index.jsx#">Saiba mais</a></li>

            </ul>

            <h1 className={style.title}>Ricky And Morty</h1>
        </header>
    )
}