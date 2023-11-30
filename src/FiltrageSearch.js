import React from 'react'
import { useState } from 'react';
import {Users} from './user'
import Table from './Table';
const FiltrageSearch = () => {
     const [query, setQuery]=useState('')
    /* Filtrage avec filter.
     const search=(date)=>{
       return date.filter(item=>
         item.first_name.toLowerCase().includes(query)||
         item.last_name.toLowerCase().includes(query)||
         item.email.toLowerCase().includes(query)
         );
     };*/

    /* Filtrage avec la clé. Celà fonction comme 'find' qui trouve le 1er mot introduit que ça soit un
    email ou first_name ou last_name */
    const keys=['first_name', 'last_name', 'email']
    const search=(data)=>{
        return data.filter(item=>
            keys.some(key=>item[key].toLowerCase().includes(query)
            ))}
  return (
    <div>
      <input type="text" placeholder='Search...' className="search" onChange={(e)=>setQuery(e.target.value)}/>
      <Table date={search(Users)}/>
    </div>
  )
}

export default FiltrageSearch
