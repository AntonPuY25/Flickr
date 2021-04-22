import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {
    getPhotosSelectors,
    TypeGetPhotosSelectors,

} from "../../store/selectors/selectorReducer";
import {TypePhoto} from "../../api/api";
import Photo from "../../common/photoContainer/photo";
import Pagination from "../../common/pagination/pagination";
import {getPhotoTC} from "../../store/reducers/reducer";
import {useParams} from 'react-router-dom';

const Pictures = () => {

    const photos: TypeGetPhotosSelectors = useSelector(getPhotosSelectors)
    const dispatch = useDispatch()
    const searchValue = sessionStorage.getItem('searchValue');
    const {id} = useParams<{ id: string }>()
    useEffect(() => {
        if(!localStorage.getItem('photos')){
            localStorage.setItem('photos', JSON.stringify([]))
        }

    }, [])

    const [test,setTest]= useState(localStorage.getItem('photos'))

    useEffect(() => {
        dispatch(getPhotoTC(searchValue!, id))

    }, [dispatch, searchValue, id])

    console.log(test)
    return <>
        <div>

        </div>
        <Pagination/>
        {photos.map((pic: TypePhoto) => {
            return (
                <div key={pic.id}>
                    <Photo pic={pic}  photoFromLocalStorage={test} setTest={setTest}/>
                </div>

            )
        })}

    </>

}


export default Pictures;