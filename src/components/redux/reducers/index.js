import { combineReducers } from 'redux';

import products from './product';
import categorys from './category';
import cart from './cart'

export default combineReducers({
    products,
    categorys,
    cart
});