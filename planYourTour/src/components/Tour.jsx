import React from 'react'
import Cards from './Cards'

function Tour({tours,RemoveHandler}) {
  return ( 
    <div className='container'>
      <div className='title'>Explore the Beauty of Nature</div>
      <div className='Cards'>
        {tours.map( (tour) =>{ return <Cards key={tour.id} {...tour} RemoveHandler={RemoveHandler}></Cards>})}
      </div>
    </div>
  )
}

export default Tour;
