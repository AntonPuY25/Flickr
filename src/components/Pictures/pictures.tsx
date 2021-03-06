import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {
    getPhotosSelectors,
    TypeGetPhotosSelectors,

} from "../../store/selectors/selectorReducer"
import {TypePhoto} from "../../api/api"
import Photo from "../../common/photoContainer/photo"
// import {getPhotoTC} from "../../store/reducers/reducer"
import {useParams} from 'react-router-dom'
import PaginationPage from "../../common/pagination/paginationPage"
import {getPhotoSagaAC} from "../../store/reducers/reducer";

const Pictures = () => {
    const photos: TypeGetPhotosSelectors = useSelector(getPhotosSelectors)
    const dispatch = useDispatch()
    const searchValue = sessionStorage.getItem('searchValue')
    const {id} = useParams<{ id: string }>()
    useEffect(() => {
        if (!localStorage.getItem('photos')) {
            localStorage.setItem('photos', JSON.stringify([]))
        }

    }, [])

    const [test, setTest] = useState(localStorage.getItem('photos'))

    useEffect(() => {
        dispatch(getPhotoSagaAC(searchValue!,id))

    }, [dispatch,searchValue,id])

    return <>
        <PaginationPage/>
        {photos.map((pic: TypePhoto) => {
            return (
                <div key={pic.id}>
                    <Photo pic={pic} photoFromLocalStorage={test} setTest={setTest}/>
                </div>
            )
        })}

    </>
}

export default Pictures