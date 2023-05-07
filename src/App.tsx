import { useState } from 'react'

import Navbar from './components/Navbar/Navbar'

import './App.scss'
import Home from './components/Home/Home'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Contact from './components/Contact/Contact'

function App() {

  const [navValue, setNavValue] = useState<string>("home")

  return (
    <>
      <Navbar setNavValue={setNavValue} />
      {navValue === "home" && <Home />}
      {navValue === "about" && <About />}
      {navValue === "experience" && <Experience />}
      {navValue === "contact" && <Contact />}
    </>
  )
}

export default App
