import { useState } from 'react'
import './App.css'
import Tour from './components/Tour';
import data from './data';


function App() {
  const [tours, setTours] = useState(data);


  // Removal of Tour card.
  function RemoveHandler(id){
    const Newtour =tours.filter((tour) => tour.id!==id);
    setTours(Newtour);
  }

  if(tours.length === 0){
    return(
    <div className='Refresh'>
      <h4>No Tours left</h4>
      <button className='btn-white' type="reset" onClick={()=>setTours(data)}>Refresh</button>
      </div>)
    
  }
  return (
  <>
  <Tour tours={tours} RemoveHandler={RemoveHandler}/>
  </> 
  )}

export default App
