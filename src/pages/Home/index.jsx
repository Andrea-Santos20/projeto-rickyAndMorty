import { useState, useEffect } from "react";
import style from "./Home.module.css";
import Header from "../../components/Header";
import Cards from "../../components/Cards";
import { api }  from "../../services/api";

export default function Home (){
    
    const [personagens, setPersonagens] = useState([]);

    const getPersonagens = async() => {
        
        const res = await api.get('/character')
        console.log(res.data.results);
        setPersonagens(res.data.results);
    }

    useEffect(() => {
        getPersonagens()
    }) 

    return (
        <>
        <Header></Header>
        <Cards 
        personagens={personagens}> 
        </Cards>
        </>
    )
}