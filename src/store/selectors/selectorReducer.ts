import {AppRootStateType} from "../store"


export const getPhotosSelectors = (state: AppRootStateType) => {
    return state.reducerPage.photos
}
export const getPagesSelectors = (state: AppRootStateType) => {
    return state.reducerPage.pages
}

export type TypeGetPhotosSelectors = ReturnType<typeof getPhotosSelectors>
