import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {
    getPhotosSelectors,
    TypeGetPhotosSelectors,

} from "../../store/selectors/selectorReducer";
import {TypePhoto} from "../../api/api";
import Photo from "../../common/photoContainer/photo";
import Pagination from "../../common/pagination/pagination";
import {getPhotoTC} from "../../store/reducers/reducer";
import { useParams } from 'react-router-dom';

const Pictures = () => {
    const photos:TypeGetPhotosSelectors = useSelector(getPhotosSelectors)
    const dispatch = useDispatch()
    const searchValue = sessionStorage.getItem('searchValue');
    const {id} = useParams<{ id: string }>()
useEffect(()=>{
    dispatch(getPhotoTC(searchValue!,id))
},[dispatch,searchValue,id])

    return <>
        <div>

        </div>
        <Pagination/>
        {photos.map((pic:TypePhoto)=>{
            const srcPath = 'https://farm'+pic.farm+'.staticflickr.com/'+pic.server+'/'+pic.id+'_'+pic.secret+'.jpg';
            return(
                <div key={pic.id}>
                    <Photo srcPath={srcPath} title={pic.title} />
                </div>

            )
        })}

    </>

}


export default Pictures;