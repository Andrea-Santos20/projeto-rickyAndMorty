import style from "./Footer.module.css";
import { BiBookHeart } from "react-icons/bi";

export default function Footer (){

    return (
        <>
            
            <p className={style.footer}>Para saber mais acesse a 
                <BiBookHeart className={style.icon} alt="Figura de um livro azul." />            
            <a href="https://rickandmortyapi.com/documentation" target="_blanck">Documentação</a>
            </p>
        </>
    )
}