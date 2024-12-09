import { useState } from "react"
import Navbar from "./components/navbar"
import HomeSection from "./components/sections/home"
import { ISectionContext, SectionContext, SectionProvider } from "./contexts/use-section"

function App() {
  return (
    <SectionProvider>
      <div className="bg-primary flex flex-col w-full h-screen border-4 hero-border">
        <Navbar />
        <HomeSection />
      </div>
    </SectionProvider>

  )
}

export default App
