
import { useEffect, useState, useParams } from "react"
import Header from "../../components/Header"

export default function Personagem (){

    const [personagens, setPersonagens] = useState([])

    const getId = useParams()
    console.log(getId)

    const getPersonagens = async() => {
        const res = await api.get(`/character/${getId}`)
        console.log(res)
        setPersonagens(res.data.results)
    }


    useEffect(() => {
        getPersonagens()
    }, []);

    return (
        <>
        <Header/>
        <div>
            <h1>
                {!personagens.location.name}
            </h1>
        </div>
        </>
    )
}