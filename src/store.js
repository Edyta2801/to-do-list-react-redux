import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import todolist, { initSync } from './state/todolist'
import auth, { initAuthUserSync } from "./state/auth";



const reducer = combineReducers({
    auth,
    todolist

})


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(thunk)

    )
)

store.dispatch(initSync())
store.dispatch(initAuthUserSync())

