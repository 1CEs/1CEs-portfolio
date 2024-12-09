import Navbar from "./components/navbar"
import Home from "./components/sections/home"

function App() {

  return (
    <div className="bg-primary flex flex-col w-full h-screen border-4 hero-border">
      <Navbar />
      <Home />
    </div>
  )
}

export default App
