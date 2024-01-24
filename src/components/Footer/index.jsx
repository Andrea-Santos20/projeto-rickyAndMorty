import style from "./Footer.module.css";
import { BiSolidBookHeart } from "react-icons/bi";


export default function Footer (){

    return (
        <>
          <section id="saiba-mais">  
            <p className={style.footer}>Para saber mais acesse a 
                < BiSolidBookHeart className={style.icon} />          
                <a href="https://rickandmortyapi.com/documentation" target="_blanck">Documentação</a>
            </p>           
            <h5>By dea.dev ©2024</h5>
          </section>

        </>
    )
}