import React from 'react';
import './Games.css'

const Games = (props) => {
    console.log(props);
    const {name, picture, time, age,  description} = props.game;
    const {handleAddToClick} = props;
    
    return (
        <div className='game'>
            <div className='game-container'>
                <img src={picture} alt="" />
                <h1 className='game-name'>Name: {name}</h1>
                <p><small>{description.slice(0, 50)}</small></p>
                <p>Time Reguired: {time} minutes</p>
                <p>Age: {age}</p>
            </div>
            
            <button onClick={()=>handleAddToClick(props.game)} className='add-btn'>
                    <p>Ad to List</p>
            </button>
            
        </div>
        
    );
};

export default Games;