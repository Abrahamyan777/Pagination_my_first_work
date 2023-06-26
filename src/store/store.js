import {applyMiddleware, createStore} from "redux";
import {rootReducer} from "./reducers/rootReducer";

function newThunk (store) {
    return function (next) {
        return function (action){
            if(typeof action === "function"){
                action(store.dispatch)
            }else{
                next(action)
            }

        }
    }
}


export const store = createStore(rootReducer,applyMiddleware(newThunk))