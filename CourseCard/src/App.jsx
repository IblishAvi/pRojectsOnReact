import { useState,useEffect} from 'react'
import Navbar from './Components/Navbar'
import Filter from './Components/Filter'
import Cards from './Components/Cards'
import './App.css'
import { apiUrl, filterData } from './data'

function App() {
  const [course, setCourse] = useState([])

useEffect(()=>{
  const fetchData = async()=>{
    try {
      const res = await fetch(apiUrl);
   const output = res.json();
   setCourse(output.data);
   
    } catch (error) {
      console.log(error);
      
    }
   
   
  }
  fetchData();
  },[]);
  return (
    <>
     <Navbar/>
     <Filter filterData={filterData}/>
     <Cards course={course}/>
    </>
  )
}

export default App
