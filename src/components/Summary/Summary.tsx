import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import style from './Summary.module.scss';
import { RootState } from '../../store';
import { translations } from '../../data/translations';

type Props = {
  subtotal: number;
  onClick?: () => void;
};

const Totals: FC<Props> = ({ subtotal }) => {
  const language = useSelector((state: RootState) => state.languages.language);

  return (
    <div className={style.wrapper}>
      <h2 className={style.heading}>{translations[language].cart.summary}</h2>
      <div className={style.littleWrapper}>
        <span>{translations[language].cart.subtotal}</span>
        <span>€ {subtotal}</span>
      </div>   
      <hr />
      <div className={style.littleWrapper}>
        <span>{translations[language].cart.delivery}</span>
        <span>{translations[language].cart.free}</span>
      </div>  
      <hr />
      <br />
      <div className={`${style.littleWrapper} ${style.total}`}>
        <span>{translations[language].cart.total}</span>
        <span>€ {subtotal}</span>
      </div>

      <button className={style.button} type="button"> {translations[language].buttons.checkout}</button>
    </div>
  );
};

export default Totals;
