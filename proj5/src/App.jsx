import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0);
  function decrementhandler(){
      if(count>0){
        setCount(count-1)
       }
      else{
            alert("sorry!")     

      }
  }
  return (
   
    
    <div className='w-[100vw] h-[100vh] flex justify-center items-center bg-[#344151] flex-col gap-10'>
    <div className='text-[#0398d4] font-medium text-2xl'>Increment and Decrement</div>
    
    <div className='bg-white flex justify-center gap-12 py-3 rounded-sm text-[25px] text-[#344151]'>
     <button className='border-r-2 text-center w-24 border-[#bfbfbf] text-5xl' onClick={decrementhandler}> - </button>
      <div className='text-5xl font-bold gap-12'> {count} </div>
      <button  className='border-l-2 text-center m-auto w-24 border-[#bfbfbf] text-5xl' onClick={() => setCount((count) => count + 1)}> + </button>
    </div>
    <button onClick={() => setCount((count) => count=0)} className='bg-[#0398d4] text-white px-5 py-2 rounded-md text-lg '>
        Reset
      </button>
  </div>
  
  )

}

export default App
