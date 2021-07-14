import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk'

import rootSagas from './SagaCombine'
import rootReducer from './ReducerCombine' //saga reducer


const saga = createSagaMiddleware()

const middleWares = [saga, thunk]
const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(...middleWares),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)

export default store;

saga.run(rootSagas)