import React from 'react'

type CardHeaderProps = React.HTMLAttributes<HTMLElement>

const CardHeader: React.FC<CardHeaderProps> = ({children, ...props}) => {
  return (
    <div {...props} className='border-[3px] border-transparent border-b-primary-100 pl-1'>
        { children }
    </div>
  )
}

export default CardHeader