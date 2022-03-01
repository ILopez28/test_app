import React from "react";
import { Link } from "react-router-dom";
import "./character.css"

const Character = (props) =>{
    const { character } = props
    return(
        <React.Fragment>
            <div className = "Character__container">
                <Link 
                    className="Character__image"
                    to={`/character/${character.id}`}
                >
                    <img 
                        className= "Character__image"
                        src={props.character.image} 
                        alt={props.character.name}
                    />
                </Link>
                <div className="Character__Data">
                    <h2 className = "Character__name">{props.character.name}</h2>
                    <p className = "Character__species">{props.character.species}</p>
                    <p className = "Character__status">{props.character.status}</p>
                    <small>{props.character.gender}</small>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Character;
