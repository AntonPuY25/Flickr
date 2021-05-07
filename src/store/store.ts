import {createStore} from "redux"
import {applyMiddleware} from "redux"
import {combineReducers} from "redux"
import thunk from "redux-thunk"
import Reducer, {watcherSaga} from "./reducers/reducer"
import createSagaMiddleware from 'redux-saga'
let rootReducer = combineReducers({
    reducerPage:Reducer
})

const sagaMiddleware = createSagaMiddleware()
export const store = createStore(rootReducer, applyMiddleware(thunk,sagaMiddleware))

export type AppRootStateType = ReturnType<typeof rootReducer>

sagaMiddleware.run(rootWatcher)

function* rootWatcher() {
    yield watcherSaga()
}


