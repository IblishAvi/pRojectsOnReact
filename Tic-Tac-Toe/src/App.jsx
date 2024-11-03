import { useState } from 'react'

import './App.css'
import Board from './components/Square'



function App() {
  const [squares,setSquares]=useState(Array(9).fill(null))

function onhandleClick(){
  const NextSquare = squares.slice()
  NextSquare[0]='X'
  setSquares(NextSquare)
} 

  return (
    <div className='w-full h-full' >
     <div className='flex bg-slate-500  mt-[15rem]  flex-col border border-x-amber-50 justify-center mx-auto my-0 text-black h-max w-max '>
     <div className='flex justify-center border  border-amber-50 '>
      <Square value={squares[0]} onSquareClick={()=>onhandleClick(0)}/>
      <Square value={squares[1]} onSquareClick={()=>onhandleClick(1)}/>
      <Square value={squares[2]} onSquareClick={()=>onhandleClick(2)}/>
      </div>
      <div className='flex justify-center border  border-amber-50  '>
      <Square value={squares[3]} onSquareClick={()=>onhandleClick(3)}/>
      <Square value={squares[4]} onSquareClick={()=>onhandleClick(4)}/>
      <Square value={squares[5]} onSquareClick={()=>onhandleClick(5)}/>
      </div>
      <div className='flex justify-center border  border-amber-50 '>
      <Square value={squares [6]} onSquareClick={()=>onhandleClick(6)}/>
      <Square value={squares [7]} onSquareClick={()=>onhandleClick(7)}/>
      <Square value={squares [8]} onSquareClick={()=>onhandleClick(8)}/>
      </div>
     </div>
    
    </div>
  )
}

export default App

