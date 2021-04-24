import React, {useState} from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import s from './photo.module.scss'
import {Button} from "@material-ui/core"
import {TypePhoto} from "../../api/api"
import Tilt from 'react-parallax-tilt'

type TestType = {
    pic: TypePhoto
    photoFromLocalStorage: string | null
    setTest?: (newItems: string | null) => void

}


const Photo: React.FC<TestType> = ({pic, photoFromLocalStorage, setTest}) => {
    const [deletePhoto, setDeletePhoto] = useState<boolean>(
        photoFromLocalStorage ? JSON.parse(photoFromLocalStorage)
            .some((item: TypePhoto) => item.id === pic.id) : false)
    const saveToLS = () => {
        if (photoFromLocalStorage) {
            let result = [pic, ...JSON.parse(photoFromLocalStorage)]
            localStorage.setItem('photos', JSON.stringify(result))
            setTest && setTest(JSON.stringify(result))
            setDeletePhoto(!deletePhoto)
        }
    }
    const deleteFromLS = (event: React.MouseEvent<HTMLButtonElement>) => {
        let result = photoFromLocalStorage && JSON.parse(photoFromLocalStorage)
            .filter((item: TypePhoto) => item.id !== event.currentTarget.dataset.id)
        setTest && setTest(JSON.stringify(result))
        localStorage.setItem('photos', JSON.stringify(result))
        setDeletePhoto(!deletePhoto)


    }
    const srcPath = 'https://farm' + pic.farm + '.staticflickr.com/' + pic.server + '/' + pic.id + '_' + pic.secret + '.jpg'

    return <>
        <Card className={s.container}>
            <CardContent>
                <Typography variant="h5" component="h1" style={{textAlign: 'center'}}>
                    {pic.title}
                </Typography>
                <Tilt
                    className="Tilt"
                    tiltMaxAngleX={10}
                    tiltMaxAngleY={10}
                    glareColor={'#ffffff'}
                >
                    <div className={s.photo}>
                        <img src={srcPath} alt="photos"></img>
                    </div>
                </Tilt>

            </CardContent>
            <div>
                {deletePhoto ?
                    <Button data-grade={1} variant="contained" data-id={pic.id} onClick={deleteFromLS}>Delete</Button>
                    :
                    <Button data-grade={1} variant="contained" onClick={saveToLS}>Save</Button>
                }


            </div>


        </Card>
    </>
}
export default Photo
