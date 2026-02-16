import React from 'react'
import profile from "../assets/profile.jpg"

const Profile = () => {
    return (
        <div className="profile">
            <div className='p-pic'>
                <div className="frame-out">
                    <div className="frame">
                        <img src={profile} alt="" />
                    </div>
                </div>
            </div>
            <div className="p-details">
                <p>Turning Ideas Into Code</p>
                <big className="name">MOHIT BHAITA</big>
                <small className="title">Full-Stack WebDeveloper | Design Engineer</small>
            </div>
        </div>
    )
}

export default Profile