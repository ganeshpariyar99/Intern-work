import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const handleClick = () =>{
    setCount(count + 1)
  }

  return (
    <>
    <div className ="flex flex-col items-center justify-center font -mono text -sm">
      <h1>Counter: {count}</h1>
      <button className ='bg-blue-500 rounded-2xl' onClick = {handleClick}>Click me</button>
    </div>
      <h1 className='flex flex-col' align='center'>vite Project</h1>
      <p align ='center'>This is the second vite project</p>
    </>
  )
}

export default App
