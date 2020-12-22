/* eslint-disable no-param-reassign */
import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Button from '../components/Button/Button';
import emptyCart from '../assets/empty.png';
import CartProducts from '../components/CartProducts/CartProducts';
import { RootState } from '../store/mainReducer';
import { translations } from '../data/translations';


const Cart: FC = () => {
  const products = useSelector((state: RootState) => state.products);
  const language = useSelector((state: RootState) => state.languages.language);
  const history = useHistory();

  const selectedProducts = products.filter((item) => item.selected);

  return (
    <section>
      <div className='container container-fluid'>
        <div className='row center-xs'>
          <div className='col-xs-12'>
            <h2 className='margin-bottom--48'>{translations[language].cart.title}</h2>
          </div>
        </div>
        {selectedProducts[0] ? (
          <CartProducts products={selectedProducts} />
        ) : (
          <div className='row center-xs'>
            <div className='col-xs-12'>
              <img src={emptyCart} alt='empty cart' style={{ maxWidth:'100%' }} />
              <h5>{translations[language].cart.emptyCart}</h5>
              <Button text={translations[language].buttons.return} onClick={() => history.push('/')} />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Cart;
