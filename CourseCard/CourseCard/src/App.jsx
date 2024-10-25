import { useState } from 'react'
import Navbar from './Components/Navbar'
import Filter from './Components/Filter'
import Cards from './Components/Cards'
import Card from './Components/Card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <Filter/>
     <Cards/>
    </>
  )
}

export default App
