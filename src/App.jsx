import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Bottles from './components/Bottles/Bottles'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <Bottles></Bottles>
    </>
  )
}

export default App


