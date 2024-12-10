import React from 'react';

type CardBodyProps = React.HTMLAttributes<HTMLElement>;

const CardBody: React.FC<CardBodyProps> = ({ children, className, ...props }) => {
  return (
    <div
      className={`${className || ''}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default CardBody;
