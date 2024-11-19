import React from 'react'
import Navbar from './components/Navbar'
import Home from './page/Home'
import About from './components/About'
import Experience from './components/Experience'
import Project from './components/Project'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <div >
      <Navbar/>
      <Home/>
      <About/>
      <Experience/>
      <Project/>
      <Contact/>
      <Footer/>
      
    </div>
  )
}

export default App