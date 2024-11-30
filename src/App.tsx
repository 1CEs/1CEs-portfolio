import { useEffect, useState } from 'react'
import Circle from "../public/images/props/circle.png"

function App() {
  const programmingLanguages = [
    "JavaScript",
    "Python",
    "Java",
    "C++",
    "TypeScript",
    "NodeJs",
    "BunJs",
    "Docker",
    "HTML",
    "CSS",
    "TailwindCSS",
    "ElysiaJs",
    "MongoDB",
    "MySQL",
    "CloudFlare",
    "GoLang"
  ]

  const [spawnedLanguages, setSpawnedLanguages] = useState<string[]>([])
  const [languageCounter, setLanguageCounter] = useState<number>(0)

  useEffect(() => {
    const background = document.getElementById('bg')
    
    // Clear previously spawned languages if any
    background?.querySelectorAll('span').forEach(span => span.remove())
    
    programmingLanguages.forEach((lang, index) => {
      const span = document.createElement('span')
      span.innerText = lang
      span.classList.add('animate-spawn-gone')

      // Set random positions for each language
      const randomX = Math.random() * 100 // percentage value for X
      const randomY = Math.random() * 100 // percentage value for Y

      span.style.position = 'absolute'
      span.style.left = `${randomX}%`
      span.style.top = `${randomY}%`
      span.style.color = `hsl(${Math.random() * 360}, 100%, 75%)` // Optional: random colors
      span.style.animationDuration = `${Math.random() * 100}s`

      background?.appendChild(span)
    })
  }, [languageCounter])

  return (
    <div id="bg" className="hero-bg flex w-full h-screen justify-center items-center relative overflow-hidden">
      {/* Background Animation */}

      {/* Main Content */}
      <div className="relative w-52 h-52 z-10">
        <img className="w-full h-full" src={Circle} alt="circle" />
        <img
          className="w-40 h-40 rounded-full absolute inset-0 m-auto cursor-pointer"
          src="https://avatars.githubusercontent.com/u/174105353?s=400&v=4"
          alt="profile"
        />
      </div>
    </div>
  )
}

export default App
