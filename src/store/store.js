import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './counter-slice';
import authReducer from './Auth-slice';

const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});

export default store;