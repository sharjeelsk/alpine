import {createStore,applyMiddleware} from 'redux'
import logger from 'redux-logger'
import RootReducer from './RootReducer'
import thunk from 'redux-thunk'
import {persistReducer,persistStore} from 'redux-persist'

const middlewares = [logger,thunk];
export const store = createStore(RootReducer,applyMiddleware(...middlewares))
