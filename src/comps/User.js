import React from 'react'

const User = ({ item }) => {
    return (
        <div className="card">    
        <img src={item.avatar_url} className="profile-pic" alt='' />
        <p className="name">{item.login}</p>
        <a href={`https://github.com/${item.login}`} target="_blank" rel="noopener noreferrer" className="btn">See more</a>
      </div>
    )
}

export default User
