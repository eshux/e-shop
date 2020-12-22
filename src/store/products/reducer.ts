/* eslint-disable no-param-reassign */
import { productData } from '../../data/productData';
import { ProductState, ADD_TO_CART, AllActions, REMOVE_FROM_CART, CHANGE_QUANTITY } from './types';

const initialStore: ProductState = productData;

export const products = (state = initialStore, action: AllActions) => {

  switch (action.type) {
    case ADD_TO_CART: {
      return state.map((item) => {
        if (item.id === action.id) {
          item.selected = true;
        }
        return item;
      });
    }

    case REMOVE_FROM_CART: {
      return state.map((item) => {
        if (item.id === action.id) {
          item.selected = false;
        }
        return item;
      });
    }
    
    case CHANGE_QUANTITY: {
      return state.map((item) => {
        if (item.id === action.id) {
          item.quantity = action.quantity;
        }
        return item;
      });
    }

    default:
      return state;
  }
};
