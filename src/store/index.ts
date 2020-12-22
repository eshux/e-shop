import { combineReducers, createStore } from 'redux';
import { ProductState } from './products/types';
import { LanguageState } from './language/types';

import { languages } from './language/reducer';
import { products } from './products/reducer';

const reducer = combineReducers({
  languages,
  products,
});

export type RootState = {
  languages: LanguageState;
  products: ProductState;
};

export const store = createStore(reducer);