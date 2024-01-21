import style from "./Footer.module.css";
import { BiSolidBookHeart } from "react-icons/bi";


export default function Footer (){

    return (
        <>
            
            <p className={style.footer}>Para saber mais acesse a 
                < BiSolidBookHeart className={style.icon} />          
                <a href="https://rickandmortyapi.com/documentation" target="_blanck">Documentação</a>
            </p>
        </>
    )
}