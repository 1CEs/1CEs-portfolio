import React from 'react'
import thaiFlagIcon from '/images/flag_icon.png'

const MyselfOption: React.FC = () => {
  const moreContent = [
    {
      headLine: "My Vision",
      content: `As a passionate learner, I believe in the power of technology to transform lives and shape the future. My ultimate goal is to contribute to projects that solve real-world problems and make a positive impact on society. I’m excited to explore opportunities where I can collaborate with like-minded individuals and grow both personally and professionally.`,
    },
    {
      headLine: "Beyond Engineering",
      content: `When I’m not coding or studying, I enjoy traveling, which helps me stay creative and balanced. I’m also fascinated by AI, robotics, and sustainable technology, which often inspire my academic and personal projects. I believe in maintaining a balance between work and life, as it fuels both my professional and personal growth.`,
    },
  ]

  return (
    <div className="flex flex-col gap-y-6 max-w-4xl mx-auto px-4 sm:px-8 py-6">
      <img src='https://t3.ftcdn.net/jpg/06/76/29/66/360_F_676296614_puk1YnJVX0pjG7ZnCXVDXAI5KafTFpLs.jpg' alt='pixel image'/>
      <div>
        <h1 className="text-3xl sm:text-4xl font-bold">Songwut Malisri</h1>
        <h3 className="text-lg sm:text-xl text-gray-600">You can call me ICE</h3>
      </div>
      <p className="text-base sm:text-xl text-gray-800">
        Computer Engineering student @ Rajamangala University of Technology Isan (RMUTI)
      </p>
      <div className="flex items-center gap-x-2 flex-wrap">
        <p className="text-base sm:text-xl">I'm currently in Thailand</p>
        <img src={thaiFlagIcon} alt="Thai Flag" className="w-5 h-3" />
      </div>
      <div className="flex flex-col gap-y-3">
        <p className="text-base sm:text-xl indent-6 text-gray-800">
          Hi, I’m Songwut Malisri, a 21-year-old Computer Engineering student passionate about technology, innovation, and problem-solving. My journey in the world of engineering has equipped me with a strong foundation in programming, software development, and system design.
        </p>
        <p className="text-base sm:text-xl indent-6 text-gray-800">
          I thrive on exploring new technologies and challenging myself to create efficient, scalable, and impactful solutions. Whether it's coding, designing algorithms, or building systems, I’m dedicated to continuous learning and improvement in the ever-evolving tech landscape.
        </p>
        <p className="text-base sm:text-xl indent-6 text-gray-800">
          Beyond academics, I enjoy collaborating on projects, sharing ideas, and turning concepts into reality. My goal is to contribute to the tech world with creativity, determination, and a growth mindset.
        </p>
        <p className="text-base sm:text-xl">Let’s connect and create something amazing! 🚀</p>
      </div>
      {moreContent.map((content, idx) => (
        <div className="flex flex-col gap-y-3" key={idx}>
          <h1 className="text-xl sm:text-2xl">{">"} <span className="underline">{content.headLine}</span></h1>
          <p className="text-base sm:text-xl indent-6 text-gray-800">{content.content}</p>
        </div>
      ))}
    </div>
  )
}

export default MyselfOption
