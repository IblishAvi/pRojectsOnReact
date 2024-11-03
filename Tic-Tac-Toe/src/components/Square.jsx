import React from 'react'



function Square({value,onSquareClick}) {
  
  return (
    <>
    <button  onClick={onSquareClick} className='border size-[4rem] border-red-100 px-8 fontSize-8  w-16 h-16'>{value}</button>
   
    </>
    
    
  )
}
export default Square
    
    
 
