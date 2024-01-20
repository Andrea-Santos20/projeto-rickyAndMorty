import { Link } from 'react-router-dom';
import style from "./Header.module.css";


export default function Header (){

    return (
        <header>

            <ul>          
                    
                <li><Link to="/">Início</Link></li>
                <li><Link to="/personagens">Personagens</Link></li>
                <li><Link to="/saiba-mais">Saiba mais</Link></li>
                
            </ul>

            <h1 className={style.title}>Ricky And Morty</h1>

            
        </header>
    )
}