import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Home from './components/Home'  
import Student from './components/Student'
import Welcome from './components/Welcome' 
   
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <home />
        <br />
        <Student />
        <br />
        <Welcome />
      </div>
    </>
  )
}

export default App
