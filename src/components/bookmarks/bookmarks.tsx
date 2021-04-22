import React, {useState} from 'react';
import {TypePhoto} from "../../api/api";
import Photo from "../../common/photoContainer/photo";

const Bookmarks = () => {
    const photoFromLocalStorage: string | null = localStorage.getItem('photos')
    const photos = localStorage.getItem('photos')
    const [test,setTest]= useState(localStorage.getItem('photos'))

    return <>

        {test&&JSON.parse(test).map((pic:TypePhoto)=>{
            return <div key={pic.id}>
             <Photo pic={pic} photoFromLocalStorage={test} setTest={setTest}/>
            </div>
        })}
    </>

}


export default Bookmarks;