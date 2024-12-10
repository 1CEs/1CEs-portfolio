import React from 'react'

type CardProps = React.HTMLAttributes<HTMLElement>

const Card: React.FC<CardProps> = ({children, className, ...props}) => {
  return (
    <div {...props} className={`hero-border border-[3px] w-full ${className || ''}`}>
        { children }
    </div>
  )
}

export default Card