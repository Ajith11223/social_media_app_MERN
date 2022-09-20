import React from 'react'
import './FollowersCard.css'
import { Follwers } from '../../data/FollowersData'

const FollowersCard = () => {
  return (
    <div className="FollwerCard">
        <h3>Who is following You</h3>
        {Follwers.map((follower,id)=>{
            return(
                <div className="follower">
                    <div>
                        <img src={follower.img} alt=""  className='followerImg'/>
                        <div className="name">
                            <span>{follower.name}</span>
                            <span>{follower.username}</span>
                        </div>
                    </div>
                    <button className='button fc-button'>
                        Follow
                    </button>
                </div>
            )
        })}
    </div>
  )
}

export default FollowersCard