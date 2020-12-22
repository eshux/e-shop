import { combineReducers } from 'redux';
import { ProductState } from './products/types';
import { LanguageState } from './language/types';

import { languages } from './language/reducer';
import { products } from './products/reducer';

export default combineReducers({
  languages,
  products,
});

export type RootState = {
  languages: LanguageState;
  products: ProductState;
};
