/* eslint-disable no-param-reassign */
import { productData } from '../../data/productData';
import { ProductState, ADD_TO_CART, AllActions, REMOVE_FROM_CART, CHANGE_QUANTITY } from './types';

const initialStore: ProductState = productData;

export const products = (state = initialStore, action: AllActions) => {

  switch (action.type) {
    case ADD_TO_CART: {
      const newState = [...state];
      newState.forEach((item) => {
        if (item.id === action.id) {
          item.selected = action.add;
        }
      });
      return newState;
    }
    case REMOVE_FROM_CART: {
      const newState = [...state];
      newState.forEach((item) => {
        if (item.id === action.id) {
          item.selected = action.remove;
        }
      });
      return newState;
    }
    case CHANGE_QUANTITY: {
      const newState = [...state];
      newState.forEach((item) => {
        if (item.id === action.id) {
          item.quantity = action.quantity;
        }
      });
      return newState;
    }
    default:
      return state;
  }
};
