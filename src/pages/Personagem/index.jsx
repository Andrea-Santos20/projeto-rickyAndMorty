import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { api } from "../../services/api";
import DetailCharacters from "../../components/detailCharacters";


export default function Personagens() {

    const [personagens, setPersonagens] = useState([])
    
    const getId = useParams()
    console.log(getId)

    const getPersonagens = async() => {
        const res = await api.get(`/character/${getId.id}`)
        console.log(res)
        setPersonagens(res.data)
    };

    useEffect(() => {
        getPersonagens();
       
    }, []);

    return (
        <>
        <Header/>       
        <DetailCharacters personagens={personagens} />
        <Footer />
        </>
    )
}