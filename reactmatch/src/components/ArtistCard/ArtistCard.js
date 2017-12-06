import React from "react";
import "./ArtistCard.css";

const ArtistCard = props => (
    <div className="card">
        <div className="img-container">
            <img alt={props.name} src={props.image} dataid={props.id} onClick={() => props.clickArtist(props.id)}/>
        </div>
    </div>
);

export default ArtistCard;

//Onclick function 
// onClick={() => props.clickArtist(props.id)}