import { useState } from 'react'
import AdoptSection from './pages/AdoptSection'
import ChooseSection from './pages/ChooseSection'
import HeroSection from './pages/HeroSection'

function App() {

  return (
    <div className="App pb-40 bg-[#FDFDFD]">
      <HeroSection/>
      <ChooseSection/>
      <AdoptSection/>
    </div>
  )
}

export default App
