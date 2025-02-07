import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'


function App() {
  const [count, setCount] = useState(0)
  let myobject={
    name:"jannat",
    age:22
  }

  return (
    <>
     {/* <h1 className='bg-green-500 py-4 rounded-2xl txt-center'>Tailwind</h1> */}
    <Card channel="chaiAurCode" someObj={myobject}/>
    <Card channel="chaiAurCode"/>
    </>
  )
}

export default App
