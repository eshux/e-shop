import React, { FC } from 'react';
import style from './Dropdown.module.scss';
import { Languages } from '../../store/language/types';

type Props = {
  value: Languages;
  options: {
    value: string;
    name: string;
  }[];
  changeHandler: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const Dropdown: FC<Props> = ({ value, changeHandler, options }) => {
  return (
    <select className={style.dropdown} value={value} onChange={(e) => changeHandler(e)}>
      {options.map((option) => {
        return (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        );
      })}
    </select>
  );
};

export default Dropdown;