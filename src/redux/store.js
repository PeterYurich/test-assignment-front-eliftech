import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { shopsSlice } from './shops/shopsSlice';
import { goodsSlice } from './goods/goodsSlice';
import { cartSlice } from './cart/cartSlice';

const cartPersistConfig = {
  key: 'cart',
  storage,
};

export const store = configureStore({
  reducer: {
    cart: persistReducer(cartPersistConfig, cartSlice.reducer),
    shops: shopsSlice.reducer,
    goods: goodsSlice.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);