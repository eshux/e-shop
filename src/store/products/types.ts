import { productData } from '../../data/productData';

export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const CHANGE_QUANTITY = 'CHANGE_QUANTITY';

export type ProductState = typeof productData;

export type AddToCart = {
  type: typeof ADD_TO_CART;
  id: number;
};

export type RemoveFromCart = {
  type: typeof REMOVE_FROM_CART;
  id: number;
};

export type ChangeQuantity = {
  type: typeof CHANGE_QUANTITY;
  quantity: number;
  id: number;
};

export type AllActions = AddToCart | RemoveFromCart | ChangeQuantity;
