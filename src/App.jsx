import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// routes
import Router from "./routes";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Router />
    </>
  )
}

export default App
