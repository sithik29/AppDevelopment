import React from 'react'
import './Userinfo.css'

const Userinfo = ({user}) => (
    <div className='user__info'>
        <img 
        src={user.avatar_url}
        alt="profile pic" 
        className='p-2 avatar'
        width={130}
        height={130}
        />
        <div className='user__infoDetails'>
                <h5>{user.name}</h5>
                <div className='user__infos'>
                    <div className='user__infoDetail'>
                        <i className='fa fa-map-marker pr-1'/>
                        <span>{user.location?user.location:"Location"} •</span>
                    </div>
                    <div className='user__infoDetail'>
                        <i className='fa fa-globe pr-1'/>
                        <span>{user.blog?user.blog:"Blog"} •</span>
                    </div>
                    <div className='user__infoDetail'>
                        <i className='fa fa-envelope pr-1'/>
                        <span>{user.email?user.email:"E-Mail"} •</span>
                    </div>
                    <div className='user__infoDetail'>
                        <i className='fa fa-twitter pr-1'/>
                        <span>{user.twitter_username?user.twitter_username:"Twitter"} •</span>
                    </div>
                    <div className='user__infoDetail'>
                        <i className='fa fa-group pr-1'/>
                        <span>{user.followers} •</span>
                    </div>
                    <div className='user__infoDetail'>
                        <i className='fa fa-heart pr-1'/>
                        <span>{user.following} •</span>
                    </div>
                </div>
        </div>
    </div>
);
export default Userinfo;