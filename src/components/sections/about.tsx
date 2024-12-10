import React, { useContext } from 'react'
import Button from '../button'
import { IOptionContext, OptionContext } from '../../contexts/use-option'
import MatchOption from './options/match-option'

const AboutSection: React.FC = () => {
    const contentOptions = ["myself", "skills & tools", "education", "contact"]
    const { option, setOption } = useContext(OptionContext)!
    return (
        <div className='flex flex-row gap-x-4'>
            <div className='flex basis-2/6 h-fit'>
                <fieldset className='p-3 border border-black w-full'>
                    <legend className='text-center'>Content</legend>
                    <ul>
                        {
                            contentOptions.map((_option: string, idx: number) => (
                                <li key={idx} onClick={() => setOption(_option as IOptionContext["option"])} className='w-full'>
                                    <Button textAlign='start' className={`w-full`}>{option == _option && '>'} {_option}</Button>
                                </li>
                            ))
                        }
                    </ul>
                </fieldset>
            </div>
            <div className='pt-3 w-full h-full basis-4/6'>
                <div className='flex hero-border-secondary border-2 bg-white-100 max-h-[800px] overflow-y-scroll'>
                    <MatchOption />
                </div>
            </div>

        </div>
    )
}

export default AboutSection