import React, { useState } from 'react';
import profilePhoto from '../../images/profile.jpg'
import './Profile.css'

const Profile = (props) => {
    const [breakTime, setBreakTime] = useState();
    const [addBreakTime, setAddBreakTime] = useState()
    
    const handleChange = event =>{
        setAddBreakTime(event.target.value);
        console.log(event.target.value);
    }
    const handleBreak = () =>{
        setAddBreakTime(breakTime);
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
                <button value={breakTime} onClick={handleBreak}>5 min</button>
                <button>10min</button>
                <button>15min</button>
                <button>20min</button>
                
            </div>
            <div>
                <p style={{ 'margin-top': '20px', 'font-weight': '500' }}>Exercise Details</p>
            </div>
            <div>
                <div className='time-in-minute'>
                    <p>Playing Time</p>
                    <p>10 min</p>

                </div>
            </div>
            <div>
                <div className='time-in-minute'>
                    <p>Break Time</p>
                    <p>{breakTime}</p>
                </div>
            </div>
        </div>
    );
};

export default Profile;