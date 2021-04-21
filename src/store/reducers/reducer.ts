import {Dispatch} from "redux";
import Api, {TypePhoto} from "../../api/api";

const setPhotoAC = (photos: TypePhoto[]) => {
    return {
        type: '/reducer/SET_PHOTO',
        photos
    } as const
}
const setErrorAC = (error: string) => {
    return {
        type: '/reducer/SET_ERROR',
        error
    } as const
}
const setStatusAC = (status: TypeStatus) => {
    return {
        type: '/reducer/SET_STATUS',
        status
    } as const
}
const setPagesAC = (pages: number) => {
    return {
        type: '/reducer/SET_PAGES',
        pages
    } as const
}
const initialState: TypeInitialState = {
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
        case "/reducer/SET_PAGES":{
            return {
                ...state,
                pages:action.pages
            }
        }


        default:
            return state
    }
}
export const getPhotoTC = (tag: string, page: string) => async (dispatch: Dispatch<TypeActions>) => {
    dispatch(setStatusAC("loading"))
    try {
        let result = await Api.getPhoto(tag, page)
        if (result.stat === 'ok') {
            dispatch(setPhotoAC(result.photos.photo))
            dispatch(setPagesAC(result.photos.pages))
            dispatch(setStatusAC("loading"))

        } else {
            dispatch(setStatusAC("error"))
            dispatch(setErrorAC('Some error'))
        }

    } catch (e) {
        dispatch(setStatusAC("error"))
        dispatch(setErrorAC(e))
    }
}

type TypeActions =
    | ReturnType<typeof setPhotoAC>
    | ReturnType<typeof setErrorAC>
    | ReturnType<typeof setStatusAC>
    | ReturnType<typeof setPagesAC>;
type TypeStatus = 'free' | 'loading' | 'success' | 'error'
type TypeInitialState = {
    error: string
    status: TypeStatus
    photos: TypePhoto[] | []
    pages: number
}
export default Reducer;