import {createStore} from "redux"
import {applyMiddleware} from "redux"
import {combineReducers} from "redux"
import thunk from "redux-thunk"
import Reducer from "./reducers/reducer"

let rootReducer = combineReducers({
    reducerPage:Reducer
})
export const store = createStore(rootReducer, applyMiddleware(thunk))

export type AppRootStateType = ReturnType<typeof rootReducer>


