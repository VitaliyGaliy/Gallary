import { combineReducers } from "redux";


export default function getRootReducer(navReducer, photos) {
  debugger
    return combineReducers({
        nav: navReducer,
        photos: photos
    });
}
