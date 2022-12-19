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

            <div className='height-weight-age'>
                

            </div>
        </div>
    );
};

export default Profile;