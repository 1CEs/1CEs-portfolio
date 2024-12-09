import React from 'react'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    isBordered?: boolean
}

const Button: React.FC<ButtonProps> = ({ children, isBordered, ...props }) => {
    return (
        <button
            className={`${isBordered ? 'border-black': 'border-primary'} border`}
            {...props}
        >
            <div
                className='w-full h-full border-r-primary-100 border-b-primary-100
                           border-l-white-100 border-t-white-100 border-2 bg-primary py-1 px-2
                           active:bg-primary-active'
            >
                {children}
            </div>
        </button>
    )
}

export default Button