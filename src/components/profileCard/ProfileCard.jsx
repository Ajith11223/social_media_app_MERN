import React from 'react'
import Cover from '../../img/cover.jpg'
 import Profile from '../../img/profileImg.jpg'
 import './ProfileCard.css'

const ProfileCard = () => {
  return (
   <div className="ProfileCard">
    <div className="ProfileImages">
        <img src={Cover} alt="" />
        <img src={Profile} alt="" />
    </div>
    <div className="ProfileName">
        <span>Jack</span>
        <span>Web developer</span>
    </div>
    <div className="followStatus">
        <hr />
        <div>
            <div className="follow">
                <span>600k</span>
                <span>Followings</span>
            </div>
            <div className="vl"></div>
            <div className="follow">
                <span>100k</span>
                <span>Followers</span>
            </div>
        </div>
        <hr />
    </div>
    <span>My Profile</span>
   </div>
  )
}

export default ProfileCard