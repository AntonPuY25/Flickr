import {AppRootStateType} from "../store";


export const getPhotosSelectors = (state: AppRootStateType) => {
    return state.reducerPage.photos
}

export type TypeGetPhotosSelectors = ReturnType<typeof getPhotosSelectors>