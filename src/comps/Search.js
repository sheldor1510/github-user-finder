import React, { useState } from 'react'

const Search = ({ getQuery }) => {
    const [text, setText] = useState('')

    const onChange = (q) => {
        setText(q)
        getQuery(q)
    }

    return (
        <form className="search">
        <input 
        type="text" 
        className="form-control" 
        placeholder="Search users"
        value={text} 
        onChange={(e) => onChange(e.target.value)}
        autoFocus />
      </form>
    )
}

export default Search
