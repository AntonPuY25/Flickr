import Api, {TypePhoto, TypeResponseData} from "../../api/api"
import {put, call, takeEvery} from 'redux-saga/effects'
export const setPhotoAC = (photos: TypePhoto[]) => {
    return {
        type: '/reducer/SET_PHOTO',
        photos
    } as const
}
export const setErrorAC = (error: string) => {
    return {
        type: '/reducer/SET_ERROR',
        error
    } as const
}
export const setStatusAC = (status: TypeStatus) => {
    return {
        type: '/reducer/SET_STATUS',
        status
    } as const
}
export const setPagesAC = (pages: number) => {
    return {
        type: '/reducer/SET_PAGES',
        pages
    } as const
}
export const initialState: TypeInitialState = {
    photos: [],
    error: '',
    status: 'free',
    pages: 0
}

const Reducer = (state: TypeInitialState = initialState, action: TypeActions): TypeInitialState => {
    switch (action.type) {
        case "/reducer/SET_PHOTO": {
            return {
                ...state,
                photos: action.photos
            }
        }
        case "/reducer/SET_ERROR": {
            return {
                ...state,
                error: action.error
            }
        }
        case "/reducer/SET_STATUS": {
            return {
                ...state,
                status: action.status
            }
        }
        case "/reducer/SET_PAGES": {
            return {
                ...state,
                pages: action.pages
            }
        }


        default:
            return state
    }
}
 export function*  getPhotoSaga(action:TypeActionSaga){
   yield put(setStatusAC("loading"))
    try {
        const result:TypeResponseData = yield call(Api.getPhoto,action.textValue,action.page)
        if (result.stat === 'ok') {
            yield put(setPhotoAC(result.photos.photo))
            yield put(setPagesAC(result.photos.pages))
            yield put(setStatusAC("success"))

        } else {
            yield put(setStatusAC("error"))
            yield put(setErrorAC('Some error'))
        }

    } catch (e) {
        yield put(setStatusAC("error"))
        yield put(setErrorAC(e))
    }
}
 export const getPhotoSagaAC = (textValue:string,page:string) =>{
    return {
    type: "REDUCER/GET_PHOTO_SAGA",
        textValue,page

    } as const
}
export type TypeActionSaga = ReturnType<typeof getPhotoSagaAC>

export function* watcherSaga(){
    yield takeEvery("REDUCER/GET_PHOTO_SAGA", getPhotoSaga)

}

type TypeActions =
    | ReturnType<typeof setPhotoAC>
    | ReturnType<typeof setErrorAC>
    | ReturnType<typeof setStatusAC>
    | ReturnType<typeof setPagesAC>
type TypeStatus = 'free' | 'loading' | 'success' | 'error'
export type TypeInitialState = {
    error: string
    status: TypeStatus
    photos: TypePhoto[] | []
    pages: number
}
export default Reducer