import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'
import getRootReducer from "./modules"



export default function getStore(navReducer, photos) {

    const store = createStore(
        getRootReducer(navReducer, photos),
        undefined,
        applyMiddleware(thunk)
    );
    return store;
}
