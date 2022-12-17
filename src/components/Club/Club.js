import React, { useEffect, useState } from 'react';
import Games from '../Games/Games';
import Header from '../Header/Header';
import Profile from '../Profile/Profile';
import './Club.css'

const Club = () => {
    const [games, setGames] = useState([]);

    useEffect(()=>{
        fetch('game-data.json')
        .then(res => res.json())
        .then(data => setGames(data))
    },[])

    return (
        <div className='club-section'>
            
            <div className="games-section">
                {
                    games.map(game=> <Games name={game.name} image={game.picture}></Games> )
                }
            </div>

            <div className="profile-section">
                <Profile></Profile>
            </div>
        </div>
    );
};

export default Club;