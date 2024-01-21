import style from "./Footer.module.css";
//import { BiBookHeart } from "react-icons/bi";

import { FaBook } from "react-icons/fa";

export default function Footer (){

    return (
        <>
            
            <p className={style.footer}>Para saber mais acesse a 
                <FaBook  />            
            <a href="https://rickandmortyapi.com/documentation" target="_blanck">Documentação</a>
            </p>
        </>
    )
}