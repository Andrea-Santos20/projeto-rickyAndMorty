import CardItem from "../CardItem";
import style from "./Cards.module.css";

export default function Cards ({ personagens }){



    return (
        <section>
            <div className={style.grid} >
                {personagens?.map((item, index) => (
                    <CardItem {...item} key={index}/> 
                ) ) }
            </div>
        </section>
    )
}