
import React, { useState, useEffect } from 'react';
import Header from './comps/Header';
import UserGrid from './comps/UserGrid';
import Search from './comps/Search';
import './App.css';
import axios from 'axios';


const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    setTimeout(()=>{
      const fetchItems = async () => {
        setIsLoading(true)
        const result = await axios(`https://api.github.com/search/users?q=${query}&per_page=10`)
        setItems(result.data.items)
        setIsLoading(false)
      }

      fetchItems();
     }, 1000)
  
    
  }, [query])

  return (
    <div className="App">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <UserGrid isLoading={isLoading} items={items} />
    </div>
  );
}

export default App;
