import React, { useEffect, useState } from 'react';
import Games from '../Games/Games';
import Header from '../Header/Header';
import Profile from '../Profile/Profile';
import './Club.css'

const Club = () => {
    const [games, setGames] = useState([]);
    
    // const [exerciseTime, setExerciseTime] = useState([]);
    const [exerciseTime, setExerciseTime] = useState(0);
 

    const handleExerciseTime = (event) =>{
        const newTime = JSON.parse(exerciseTime) + JSON.parse(event); 
        // const newTime = [...exerciseTime, event]
        setExerciseTime(newTime);
        const dataInLocalStorage = localStorage.setItem('Playing Time', event)
        // console.log(dataInLocalStorage);
        // console.log('clicked',newTime);

    }

    useEffect(()=>{
        fetch('game-data.json')
        .then(res => res.json())
        .then(data => setGames(data))
    },[])

    

    return (
        <div className='club-section'>
            
            <div className="games-section">
                {
                    games.map(game => <Games 
                        key={game.id}
                        time={game.time}
                        game={game} 
                        handleExerciseTime={handleExerciseTime}
                        ></Games> )
                }
            </div>

            <div className="profile-section">
                {/* <h1>{exerciseTime}</h1> */}
                <Profile 
                games={games}
                exerciseTime={exerciseTime}
                
                ></Profile>
                
            </div>
        </div>
    );
};

export default Club;