import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { api } from "../../services/api";
import DetailCharacters from "../../components/detailCharacters";


export default function Personagens (){

    const [personagens, setPersonagens] = useState([])
    const [locations, setLocations] = useState([]);

    const getId = useParams()
    console.log(getId)

    const getPersonagens = async() => {
        const res = await api.get(`/characters/${getId}`)
        console.log(res)
        setPersonagens(res.data.results)
    };

    const getLocations = async () => {        
        const locationsRes = await api.get("/locations");
        setLocations(locationsRes.data.results);
    };


    useEffect(() => {
        getPersonagens();
        getLocations();
    }, []);

    return (
        <>
        <Header/>       
        <DetailCharacters personagens={personagens} locations={locations} />
        <Footer />
        </>
    )
}