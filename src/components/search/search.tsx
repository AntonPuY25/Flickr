import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getPhotoTC} from "../../store/reducers/reducer";
import {getPhotosSelectors, TypeGetPhotosSelectors} from "../../store/selectors/selectorReducer";
import {TypePhoto} from "../../api/api";

const Search = () => {
    const photos:TypeGetPhotosSelectors = useSelector(getPhotosSelectors)
    const [searchValue,setSearchValue] = useState<string>('')
    const dispatch = useDispatch()

const searchFunc = ()=>{
    dispatch(getPhotoTC(searchValue))
    setSearchValue('')
}
    return <>
        <div>
            <div>
                <input value={searchValue} onChange={(e)=>setSearchValue(e.currentTarget.value)}/>
            </div>
            <div>
                <button onClick={searchFunc}>Search</button>
            </div>
        </div>

        {photos.map((pic:TypePhoto)=>{
            const srcPath = 'https://farm'+pic.farm+'.staticflickr.com/'+pic.server+'/'+pic.id+'_'+pic.secret+'.jpg';
            return(
                <img alt="photos" src={srcPath}></img>
            )
        })}

  </>

}


export default Search;