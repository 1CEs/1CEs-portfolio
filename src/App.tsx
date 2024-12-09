import Navbar from "./components/navbar"
import MatchSection from "./components/sections/match-section"
import { SectionProvider } from "./contexts/use-section"

function App() {
  return (
    <SectionProvider>
      <div className="bg-primary flex flex-col w-full h-screen border-4 hero-border">
        <Navbar />
        <MatchSection />
      </div>
    </SectionProvider>

  )
}

export default App
