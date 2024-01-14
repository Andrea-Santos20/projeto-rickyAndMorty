import { useState, useEffect } from "react";
import Header from "../../components/Header";
import Cards from "../../components/Cards";
import { api }  from "../../services/api";
import Footer from "../../components/Footer";

export default function Home (){
    
    const [personagens, setPersonagens] = useState([]);

    const getPersonagens = async() => {
        
        const res = await api.get('/character')
        console.log(res.data.results);
        setPersonagens(res.data.results);
    }

    useEffect(() => {
        getPersonagens()
    },  []) 

    return (
        <>
        <Header/>
        <Cards personagens={personagens}/>         
        <Footer/>
        </>
    )
}