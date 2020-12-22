import React, { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import style from './Header.module.scss';
import logo from '../../assets/logo.svg';
import cart from '../../assets/cart.svg';
import { RootState } from '../../store/mainReducer';
import { Languages } from '../../store/language/types';
import { languageData } from '../../data/languageData';
import { changeLanguage } from '../../store/language/actions';
import Dropdown from '../Dropdown/Dropdown';

const Header: FC = () => {
  const products = useSelector((state: RootState) => state.products);
  const language = useSelector((state: RootState) => state.languages.language);
  const dispatch = useDispatch();

  const selectedProducts = products.filter((item) => item.selected);

  return (
    <header className={style.header}>
      <div className="container container-fluid">
        <div className="row middle-xs">
          <div className="col-xs-3">
            <Link to="/">
              <img className={style.logo} src={logo} alt="logo" />
            </Link>
          </div>
          <div className="col-xs-9 end-xs">
            <nav className={style.nav}>
              <Link to="/cart">
                <div className={style.cart}>
                  <span className={style.num}>{selectedProducts.length}</span>
                  <img className={style.img} src={cart} alt="cart" />
                </div>
              </Link>
              <Dropdown
                value={language}
                options={languageData}
                changeHandler={(e) => {
                  const ln = e.target.value as Languages;
                  dispatch(changeLanguage(ln));
                }}
              />
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
