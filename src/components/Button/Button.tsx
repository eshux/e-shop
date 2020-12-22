import React, { FC } from 'react';
import style from './Button.module.scss';

type Props = {
  text: string;
  onClick: () => void;
  active?: boolean;
};

const Button: FC<Props> = ({ text, onClick, active }) => {
  return (
    <button type="button" className={`${style.button} ${active ? style.active : ''}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
