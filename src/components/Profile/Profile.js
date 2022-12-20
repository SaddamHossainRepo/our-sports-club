import React from 'react';
import profilePhoto from '../../images/profile.jpg'
import './Profile.css'

const Profile = () => {
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
                <a href="">5min</a>
                <a href="">10min</a>
                <a href="">15min</a>
                <a href="">20min</a>
            </div>
            <div>
                <p style={{ 'margin-top': '20px', 'font-weight': '500' }}>Exercise Details</p>
            </div>
            <div>
                <div className='time-in-minute'>
                    <p>Playing Time</p>
                    <p>10min</p>
                </div>
            </div>
            <div>
                <div className='time-in-minute'>
                    <p>Break Time</p>
                    <p>20min</p>
                </div>
            </div>
        </div>
    );
};

export default Profile;