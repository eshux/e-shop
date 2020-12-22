import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import style from './Product.module.scss';
import { addToCart, removeFromCart } from '../../store/products/actions';
import Button from '../Button/Button';
import { translations } from '../../data/translations';
import { RootState } from '../../store';

type Props = {
  title: string;
  price: number;
  selected: boolean;
  img: string;
  id: number;
};

const Product: FC<Props> = ({ title, price, selected, img, id }) => {
  const language = useSelector((state: RootState) => state.languages.language);
  const dispatch = useDispatch();
  const added = () => toast(`${translations[language].notifications.itemAdded}`);

  return (
    <div className={style.card}>
      <div className={style.imageWrapper}>
        <img className={style.image} src={img} alt={title} />
      </div>
      <div className={style.content}>
        <span className={style.title}>{title}</span>
        <span className={style.price}>€ {price}</span>
      </div>
      {!selected ? (
        <>
          <Button
            active={true}
            text={translations[language].buttons.addToCart}
            onClick={() => {
              dispatch(addToCart(id));
              added();
            }}
          />
          <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            transition={Slide}
            pauseOnHover={false}
          />
        </>
      ) : (
        <Button
          text={translations[language].buttons.removeFromCart}
          onClick={() => {
            dispatch(removeFromCart(id));
          }}
        />
      )}
    </div>
  );
};

export default Product;
