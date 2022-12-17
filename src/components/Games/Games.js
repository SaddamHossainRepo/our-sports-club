import React from 'react';
import './Games.css'

const Games = (props) => {
    return (
        <div className='game-container'>
            <h1>Name: {props.name}</h1>
            <img src={props.image} alt="" />
        </div>
    );
};

export default Games;