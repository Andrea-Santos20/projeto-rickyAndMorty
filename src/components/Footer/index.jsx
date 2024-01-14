import style from "./Footer.module.css";

export default function Footer (){

    return (
        <>
            <p className={style.footer}>Para saber mais acesse a <a href="https://rickandmortyapi.com/documentation" target="_blanck">Documentação</a> </p>
        </>
    )
}