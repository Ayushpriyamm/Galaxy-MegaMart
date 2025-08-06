// store.ts
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/user/userSlice'
import cartReducer from '../features/cart/cartSlice'

import storage from 'redux-persist/lib/storage' // localStorage by default
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

const persistConfigUser = {
  key: 'user',
  storage,
}
const persistConfigCart={
  key:'cart',
  storage
}

const rootReducers = combineReducers({
  user:persistReducer(persistConfigUser, userReducer),
  cart:persistReducer(persistConfigCart,cartReducer)
})
export const store = configureStore({
  reducer:rootReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
