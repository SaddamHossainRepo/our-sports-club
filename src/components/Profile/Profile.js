import React, { useState } from 'react';
import profilePhoto from '../../images/profile.jpg'
import './Profile.css'

const Profile = (props) => {
    const [addBreakTime, setAddBreakTime] = useState(0)
    
    const handleChange = event => {
        setAddBreakTime(event.target.value);
        const breakTime = JSON.parse(event.target.value);
        localStorage.setItem('BreakTime', breakTime);
    }

    return (
        <div>

            <div className="profile-name-pic">

                <img src={profilePhoto} alt="" />
                <p><small>Saddam Hossain</small></p>
            </div>

            <div className='personal-info'>
                <div className='height-weight-age-number'>
                    <p>50</p>
                    <p>5.5</p>
                    <p>25 yrs</p>
                    <p>weight</p>
                    <p>hight</p>
                    <p>age</p>
                </div>
            </div>
            <div>
                <p style={{ 'margin-top': '20px', 'font-weight': '500' }}>Add a Break</p>
            </div>
            <div className='time-in-minute'>
                <button value={5} onClick={handleChange}>5 min</button>
                <button value={10} onClick={handleChange}>10min</button>
                <button value={15} onClick={handleChange}>15min</button>
                <button value={20} onClick={handleChange}>20min</button>

            </div>
            <div>
                <p style={{ 'margin-top': '20px', 'font-weight': '500' }}>Exercise Details</p>
            </div>
            <div>
                <div className='time-in-minute'>
                    <p>Playing Time</p>
                    <p>{props.exerciseTime}min</p>

                </div>
            </div>
            <div>
                <div className='time-in-minute'>
                    <p>Break Time</p>
                    <p>{addBreakTime} min</p>
                </div>
            </div>
        </div>
    );
};

export default Profile;