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
                className='w-full h-full hero-border border-2 bg-primary py-1 px-2
                           active:bg-primary-active flex items-center justify-center'
            >
                {children}
            </div>
        </button>
    )
}

export default Button