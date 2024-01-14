import style from "./Footer.module.css";

export default function Footer (){

    return (
        <>
            
            <p className={style.footer}>Para saber mais acesse a 
            <img src="/src/components/Footer/book.png" alt="figura de um livro" /> 
            <a href="https://rickandmortyapi.com/documentation" target="_blanck">Documentação</a>
            </p>
        </>
    )
}