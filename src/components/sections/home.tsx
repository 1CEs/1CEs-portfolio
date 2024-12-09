import React from 'react'
import Button from '../button'
import bookIcon from '/images/book_icon.png'
import textIcon from '/images/text_icon.png'

const HomeSection: React.FC = () => {
    const actions = [
        {
            content: "About Me",
            srcImage: bookIcon
        },
        {
            content: "Download Resume",
            srcImage: textIcon
        },
    ]

    const introduction = "A computer engineering student dedicated to crafting innovative solutions and impactful projects. I specialize in [core skills or focus areas, e.g., building interactive web experiences, designing intuitive interfaces, or solving complex challenges]. Explore my work, learn more about me, and let’s connect!"

    return (
        <div className='w-full h-full flex flex-col justify-center gap-y-3 items-center'>
            <h1 className='text-3xl'>Hi, I’m <span className='text-purple hover:underline'>Songwut Malisri</span></h1>
            <p className='text-2xl max-w-[50%] indent-10'>{introduction}</p>
            <div className='flex gap-x-3'>
                {
                    actions.map((action: typeof actions[0], idx: number) => (
                        <Button className='text-2xl hover:underline' key={idx}>
                            <div className='flex items-center gap-x-1'>
                                <img className='w-5 h-5' src={action.srcImage} alt='book icon' />
                                <span>{action.content}</span>
                            </div>
                        </Button>
                    ))
                }

            </div>
        </div>
    )
}

export default HomeSection