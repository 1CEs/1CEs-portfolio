import React from 'react'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    isBordered?: boolean
}

const Button: React.FC<ButtonProps> = ({ children, isBordered, ...props }) => {
    return (
        <button
            className={`${isBordered ? 'border-black': 'border-[#d4d0c7]'} border`}
            {...props}
        >
            <div
                className='w-full h-full border-r-[#adaaa3] border-b-[#adaaa3]
                           border-l-[#eee] border-t-[#eee] border-2 bg-[#d4d0c7] py-1 px-2
                           active:bg-[#bcb9b1]'
            >
                {children}
            </div>
        </button>
    )
}

export default Button