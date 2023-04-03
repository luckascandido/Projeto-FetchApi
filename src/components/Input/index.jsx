import { Component } from 'react';
import './input.css'
export const Inputtext =({handleChange,searchValue,text}) =>{
   
     return (
       console.log(handleChange,searchValue),
      <div>
      <label>Filtrar</label>
       <input
          className='input'
          onChange={handleChange}
          value={searchValue}
          type={text}
          label= 'Pesquise'
        />
       </div>
     )
}