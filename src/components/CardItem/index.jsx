import style from "./CardItem.module.css";
import { Link } from "react-router-dom";

export default function CardItem ({name, status, species, type, image, id}){

    return (
        <>
        <div className={style.cardItem}>
            <div className={style.name}>
                <h1>{name}</h1>
            </div>
            <div className={style.description}>
                <p>{status}</p>
                <p>{species}</p>
                <p>{type}</p>
            </div>
            
            <img className={style.img} src={image} alt="" />

            <Link to={`/personagem/${id}`} className={style.link}></Link>
        </div>
        </>
    )
}