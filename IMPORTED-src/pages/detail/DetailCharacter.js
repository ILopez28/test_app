import React, { useEffect, useState } from "react";
import { useParams} from "react-router-dom";
import Http from "../../lib/request";
import "./Detail.css"

const DetailCharacter = () =>{
    const { id } = useParams();
    const [character, setCharacter] = useState({})
    const [origin, setOrigin] = useState({})
    const [location, setLocation] = useState({})

    useEffect(()=>{
        const fetchCharacter = async ( ) =>{
            const character = await Http.instance.get_character(id);
            setCharacter(character)
            setOrigin(character.origin)
            setLocation(character.location)
        }
        fetchCharacter();
    },[])

    return (
        <React.Fragment>
            <h1>{character.name}</h1>
        </React.Fragment>
    );
};

export default DetailCharacter;
