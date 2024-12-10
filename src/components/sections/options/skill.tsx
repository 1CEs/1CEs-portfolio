import React, { useEffect, useState } from 'react'

const SkillOption: React.FC = () => {
    const [select, setSelect] = useState<string | null>(null)
    const [doubleClick, setDoubleClick] = useState<string | null>(null)
    const skills = [
        {
            name: "HTML 5",
            srcImage: "https://cdn.iconscout.com/icon/free/png-256/free-html-5-logo-icon-download-in-svg-png-gif-file-formats--programming-langugae-language-pack-logos-icons-1175208.png?f=webp&w=256",
            href: "https://html.com/"
        },
        {
            name: "CSS 3",
            srcImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/2048px-CSS3_logo.svg.png",
            href: "https://css.com/"
        },
        {
            name: "Javascript",
            srcImage: "https://iconape.com/wp-content/files/ez/353342/svg/javascript-seeklogo.com.svg",
            href: "https://javascript.com/"
        },
        {
            name: "React JS",
            srcImage: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
            href: "https://react.dev/"
        },
        {
            name: "C",
            srcImage: "https://static-00.iconduck.com/assets.00/c-plain-icon-894x1024-0mfgph47.png",
            href: "#"
        },
        {
            name: "Java",
            srcImage: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/181_Java_logo_logos-512.png",
            href: "#"
        },
        {
            name: "Python",
            srcImage: "https://cdn.iconscout.com/icon/free/png-256/free-python-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-5-pack-logos-icons-3030224.png?f=webp&w=256",
            href: "#"
        },
        {
            name: "Golang",
            srcImage: "https://img.icons8.com/?size=512&id=44442&format=png",
            href: "#"
        },
        {
            name: "Typescript",
            srcImage: "https://cdn-icons-png.flaticon.com/512/5968/5968381.png",
            href: "#"
        },
        {
            name: "Node JS",
            srcImage: "https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png",
            href: "#"
        },
        {
            name: "Bun JS",
            srcImage: "https://i.imgur.com/knuZjlX.png",
            href: "https://bun.sh/"
        },
        {
            name: "Elysia JS",
            srcImage: "https://elysiajs.com/assets/elysia.svg",
            href: "#"
        },
        {
            name: "Express JS",
            srcImage: "https://www.peanutsquare.com/wp-content/uploads/2024/04/Express.png",
            href: "#"
        },
        {
            name: "Kotlin",
            srcImage: "https://upload.wikimedia.org/wikipedia/commons/7/74/Kotlin_Icon.png",
            href: "#"
        },
        {
            name: "Dart",
            srcImage: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Dart-logo.png",
            href: "#"
        },
        {
            name: "Flutter",
            srcImage: "https://seeklogo.com/images/F/flutter-logo-5086DD11C5-seeklogo.com.png",
            href: "#"
        },
        {
            name: "Docker",
            srcImage: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/97_Docker_logo_logos-512.png",
            href: "#"
        },
        {
            name: "Git",
            srcImage: "https://static-00.iconduck.com/assets.00/git-icon-2048x2048-juzdf1l5.png",
            href: "#"
        },
        {
            name: "Github",
            srcImage: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
            href: "#"
        },
        {
            name: "Next JS",
            srcImage: "https://www.cdnlogo.com/logos/n/80/next-js.svg",
            href: "#"
        },
        {
            name: "Cloudflare",
            srcImage: "https://upload.wikimedia.org/wikipedia/commons/9/94/Cloudflare_Logo.png",
            href: "#"
        },
    ]

    useEffect(() => console.log(select), [select])

    return (
        <div className='flex flex-wrap p-4 gap-2'>
            {
                skills.map((skill: typeof skills[0], idx: number) => (
                    <div
                        key={idx}
                        onDoubleClick={() => setDoubleClick(skill.name)}
                        onClick={() => {
                            setSelect(skill.name)
                            setDoubleClick(null)
                        }}
                        className={`flex flex-col justify-center items-center w-20 h-20 rounded-sm
                                    cursor-pointer ${skill.name == select && 'border-dashed border-black-100 border'}`}
                    >
                        <img src={skill.srcImage} alt="skill image" className={`h-12`} />
                        <h1 className={` ${doubleClick == skill.name && 'bg-purple text-white'}`}>{skill.name}</h1>
                    </div>
                ))
            }
        </div>
    )
}

export default SkillOption