import Circle from "../public/images/props/circle.png"

function App() {

  return (
    <div className="hero-bg flex w-full h-screen justify-center items-center relative overflow-hidden">
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
