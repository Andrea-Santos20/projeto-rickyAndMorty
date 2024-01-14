import style from "./CardItem.module.css";

export default function CardItem ({name, status, species, type, image}){

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
            <img src={image} alt="" />
        </div>
        </>
    )
}