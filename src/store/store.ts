import { createStore } from 'redux';
import reducer from './mainReducer';

export const store = createStore(reducer);
