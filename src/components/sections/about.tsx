import React from 'react'
import Button from '../button'
import MyselfOption from './options/myself'

const AboutSection: React.FC = () => {
    const contentOptions = ["myself", "skill & tools", "education", "contact"]
    return (
        <div className='flex flex-row gap-x-4'>
            <div className='flex basis-1/4 h-fit'>
                <fieldset className='p-3 border border-black w-full'>
                    <legend className='text-center'>Content</legend>
                    <ul>
                        {
                            contentOptions.map((option: string, idx: number) => (
                                <li key={idx} className='w-full'>
                                    <Button textAlign='start' className='w-full'>{option}</Button>
                                </li>
                            ))
                        }
                    </ul>
                </fieldset>
            </div>
            <div className='pt-3 w-full h-full'>
                <div className='flex pt-2 basis-3/4 hero-border-secondary border-2 bg-white p-2'>
                    <MyselfOption />
                </div>
            </div>

        </div>
    )
}

export default AboutSection