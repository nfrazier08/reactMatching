import React from "react";
import "./ArtistCard.css";

const ArtistCard = props => (
    <div className="card">
        <div className="img-container">
            <img className="match" alt={props.name} dataid={props.id} src={props.image} onClick={() => props.clickArtist(props.id)} />
        </div>
    </div>
);

export default ArtistCard;
