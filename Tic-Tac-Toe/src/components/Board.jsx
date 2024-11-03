import React from 'react'

function Board() {
  return (
    <div className='flex flex-col justify-center   w-full'>
        <div className='Board-row flex bg-slate-500 items-center mt-5 gap-5 '>
           <div className='square w-8 h-6'>1</div>
           <div className='square w-8 h-6'>2</div>
           <div className='square w-8 h-6'>3</div>
         </div>
    
        <div className='Board-row flex mt-5 bg-slate-500  gap-5 '>
           <div className='square w-8 h-6'>4</div>
           <div className='square w-8 h-6'>5</div>
           <div className='square w-8 h-6'>6</div>
        </div>
        <div className='Board-row flex bg-slate-500 items-center mt-5  gap-5'>
           <div className='square w-8 h-6'>7</div>
           <div className='square w-8 h-6'>8</div>
           <div className='square w-8 h-6'>9</div>
        </div>
    
    
    </div>
  )
}

export default Board
