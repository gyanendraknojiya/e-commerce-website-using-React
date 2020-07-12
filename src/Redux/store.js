import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 


import rootReducer from './root-reducer'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
  }
  const persistedReducer = persistReducer(persistConfig, rootReducer)

const middleware = [logger]

export const store = createStore(persistedReducer, applyMiddleware(...middleware))
export const persistor = persistStore(store)

export default { store, persistor };