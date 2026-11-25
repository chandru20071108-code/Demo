import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>Welcome to Vite + React</h1>
     <h1 style={{
      color: "blue",
      fontSize: "50px",
      textAlign: "center"
     }}>Hello World</h1>
     <p className="text-gray-500 text-lg text-center">Learn React step by step</p>
     <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
       Click me
     </button>
    </>
  )
}

export default App
