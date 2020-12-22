/* eslint-disable no-param-reassign */
import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './CartProducts.module.scss';
import { ProductState } from '../../store/products/types';
import { removeFromCart, changeQuantity } from '../../store/products/actions';
import RemoveButton from '../RemoveButton/RemoveButton';
import Summary from '../Summary/Summary';
import { translations } from '../../data/translations';
import { RootState } from '../../store';

type Props = {
  products: ProductState;
};

const CartProducts: FC<Props> = ({ products }) => {
  const language = useSelector((state: RootState) => state.languages.language);
  const dispatch = useDispatch();

  let sum = 0;
  if (products[0]) {
    const sumArr = products.map((item) => {
      const total = (item.price * item.quantity).toFixed(2);
      return Number(total);
    });

    sum = sumArr.reduce((acc, i) => acc + i);
  }

  return (
    <div className='row'>
      <div className='col-md-8 col-xs-12'>
        <table className={style.table}>
          <thead className={style.thead}>
            <tr>
              <th> </th>
              <th>{translations[language].cart.product}</th>
              <th>{translations[language].cart.price}</th>
              <th>{translations[language].cart.quantity}</th>
              <th>{translations[language].cart.total}</th>
            </tr>
          </thead>
          <tbody className={style.tbody}>
            {products.map(({ name, price, img, id, quantity }) => {
              return (
                <tr key={id}>
                  <td>
                    <RemoveButton
                      onClick={() => {
                        dispatch(removeFromCart(id));
                        dispatch(changeQuantity(id, 1));
                      }}
                    />
                  </td>
                  <td>
                    <div className={style.imageWrap}>
                      <img className={style.img} src={img} alt={name} />
                      <span className={style.name}>{name}</span>
                    </div>
                  </td>
                  <td>€ {price}</td>
                  <td>
                    <input 
                      className={style.input}
                      type='number'
                      value={quantity}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        const quant = Number(e.target.value);
                        quant && dispatch(changeQuantity(id, quant));
                      }}
                    />
                  </td>
                  <td>€ {(price * quantity).toFixed(2)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className='col-md-4 col-xs-12'>
        <Summary subtotal={Number(sum.toFixed(2))} />
      </div>
    </div>
  );
};

export default CartProducts;
