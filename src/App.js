import { useState } from 'react';
import './App.css';
import {Users} from './user'
import Table from './Table';
function App() {
  const [query, setQuery]=useState('')
  const search=(date)=>{
    return date.filter(item=>
      item.first_name.toLowerCase().includes(query)||
      item.last_name.toLowerCase().includes(query)||
      item.email.toLowerCase().includes(query)
      );
  };
  return (
    <div className="App">
      <input type="text" placeholder='Search...' className="search" onChange={(e)=>setQuery(e.target.value)}/>
      <Table date={search(Users)}/>
    </div>
  );
}

export default App;
