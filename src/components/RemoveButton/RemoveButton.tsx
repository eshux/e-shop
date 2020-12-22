import React, { FC } from 'react';
import style from './RemoveButton.module.scss';

type Props = {
  text?: string;
  onClick: () => void;
};

const RemoveButton: FC<Props> = ({ text, onClick }) => {
  return (
    <button type="button" className={style.button} onClick={onClick}>
      {text}
    </button>
  );
};

export default RemoveButton;
