import React from 'react'
import User from '../comps/User'

const UserGrid = ({ isLoading, items }) => {

    return isLoading ? (<h1>Loading...</h1>) : (<div className="card-grid">
        {items.map(item => (
            <User key={item.id} item={item}/>
        ))}
    </div>)
}

export default UserGrid
