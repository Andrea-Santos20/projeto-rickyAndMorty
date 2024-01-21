import { Link } from 'react-router-dom';
import style from "./Header.module.css";


export default function Header (){

    return (

        <header>

            <ul className={style.lista}>          
                    
                <li><Link className={style.link} to="/">Início</Link></li>
               {/*<li><Link className={style.link} to="/home">Personagens</Link></li>*/}
                <li><Link className={style.link} to="/saiba-mais">Saiba mais</Link></li>
                
            </ul>

            <h1 className={style.title}>Ricky And Morty</h1>
            
        </header>
    )
}