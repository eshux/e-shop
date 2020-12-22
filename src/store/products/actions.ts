import { ADD_TO_CART, AddToCart, REMOVE_FROM_CART, RemoveFromCart, CHANGE_QUANTITY, ChangeQuantity } from './types';

export const addToCart = (id:number):AddToCart => {
  return {
    type: ADD_TO_CART,
    id,
  };
};

export const removeFromCart = (id:number):RemoveFromCart => {
  return {
    type: REMOVE_FROM_CART,
    id,
  };
};

export const changeQuantity = (id:number, quantity: number):ChangeQuantity => {
  return {
    type: CHANGE_QUANTITY,
    quantity,
    id,
  };
};