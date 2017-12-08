import React from "react";
import "./Header.css";

const Header = props => (
    <header className="header">
        <h3>Artist Memory Game</h3>
            <h4>Basically, don't click the same image twice...</h4>
            <h4>Score: {props.score} || Top Score: {props.topScore}</h4>
            <h4>You Clicked: {props.clickedName}</h4>  
            <h2> {props.youLose}</h2>
    </header>
)

export default Header;
