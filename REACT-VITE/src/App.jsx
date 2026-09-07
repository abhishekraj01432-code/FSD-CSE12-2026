import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Icard from './Components/Icard'
import Gallery from './Components/Gallery'
import ReactHook from './Components/ReactHook'
import ImageManupulation from './Components/ImageManupulation'

function App() {

  return (
    <div>
      {/* <Gallery/> */}
      {/* <ReactHook/> */}
      <ImageManupulation/>
      
    </div>
  )
}

export default App
