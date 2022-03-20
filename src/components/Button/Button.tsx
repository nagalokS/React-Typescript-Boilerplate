import React, { ReactNode } from 'react';
import style from './Button.module.scss';

export type ButtonType = {
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  /**Children which you don't have :) */
  children: ReactNode;
};
/**Start component Button  */
const Button: React.FC<ButtonType> = ({ children, onClick, variant = 'primary' }) => {
  const className = `${style.button} ${style[variant]}`;
  return (
    <button className={className} onClick={() => onClick?.()}>
      {children}
    </button>
  );
};

export default Button;
