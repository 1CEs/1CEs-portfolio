import React from 'react'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    isBordered?: boolean
    textAlign?: "start" | "center" | "end"
}

const Button: React.FC<ButtonProps> = ({ children, isBordered, className, textAlign="center", ...props }) => {
    const setTextAlign = `justify-${textAlign}`
    return (
        <button
            className={`${isBordered ? 'border-black': 'border-primary'} ${className || ''} border`}
            {...props}
        >
            <div
                className={`w-full h-full hero-border border-2 bg-primary py-1 px-2
                           active:bg-primary-active flex items-center ${setTextAlign} ${className || ''}`}
            >
                {children}
            </div>
        </button>
    )
}

export default Button