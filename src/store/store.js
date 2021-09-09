import {configureStore} from '@reduxjs/toolkit'; 
import users from './users';
import inventory from './inventory';
import orders from './orders';

const store = configureStore({
    reducer: {
        users,
        inventory,
        orders
    }
});

export default store;