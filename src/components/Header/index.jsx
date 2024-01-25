import { Link } from 'react-router-dom';
import style from "./Header.module.css";


export default function Header (){

    return (

        <header>

            <ul className={style.lista}>          
                    
                <li><Link className={style.link} to="/">Home</Link></li>
               
                <li><a className={style.link} href="#saiba-mais">Saiba mais</a></li>
                
            </ul>

            <h1 className={style.title}>Ricky And Morty</h1>
            
        </header>
    )
}