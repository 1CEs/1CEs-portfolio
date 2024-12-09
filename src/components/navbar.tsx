import React, { useContext } from 'react'
import fileIcon from '../../public/images/file_icon.png'
import Button from './button'
import { ISectionContext, SectionContext } from '../contexts/use-section'

type NavbarProps = React.HTMLAttributes<HTMLElement>

const Navbar: React.FC<NavbarProps> = ({ ...props }) => {
    const { section, setSection } = useContext(SectionContext)!
    const menus = ["Home", "About", "Project", "Resume"]

    return (
        <nav className='flex flex-col w-full' {...props}>
            <div className='flex justify-between bg-purple items-center'>
                <div className='flex items-center'>
                    <img src={fileIcon} alt='logo' className=' w-10 h-10' />
                    <h1 className=' text-xl text-white-100'>1CEs Portfolio ({section})</h1>
                </div>
                <div className='flex gap-x-1 pr-3 font-semibold'>
                    <Button className='h-5 w-5'><span> i </span></Button>
                    <Button className='h-5 w-5'><span> X </span></Button>
                </div>
            </div>
            <ul className='flex gap-x-6 pl-3'>
                {
                    menus.map((menu: string, idx: number) => (
                        <li
                            onClick={() => setSection(menu as ISectionContext["section"])}
                            className={`${section == menu ? 'underline' : null} 
                                        p-1 text-xl hover:font-semibold cursor-pointer`}
                            key={idx}
                        >
                            <a href="#">{menu}</a>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}

export default Navbar