import React from 'react'
import { NavLink } from 'react-router-dom'

const Cocktail = ({id, name, Image, info, glass}) => {
  return (
    <article className='shadow-lg bg-white/50 rounded-md'>
      <div>
        <img src={Image} alt={name} className="rounded-md"/>
      </div>
      <div className='p-4 space-y-1'>
        <h3 className='text-lg font-bold'>{name}</h3>
        <h3 className='text-sm font-medium tracking-widest'>{glass}</h3>
        <p className='text-xs text-gray-400'>{info}</p>
        <button className='bg-blue-500 text-white/75 hover:text-white px-3 py-1 rounded-sm text-sm'>
          <NavLink to={`/cocktail/${id}`} >details</NavLink>
        </button>
      </div>
    </article>
  )
}

export default Cocktail
