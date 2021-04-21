import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import s from './photo.module.scss'
import {Button} from "@material-ui/core";

type TestType = {
    srcPath:string
    title:string
}
const Photo: React.FC<TestType> = ({
                                       srcPath,title

                                        }) => {

    return <>

        <Card className={s.container}>

            <CardContent>

                <Typography variant="h6" component="h1" style={{textAlign:'center'}}>
                    {title}

                </Typography>
                <div className={s.photo}>
                    <img alt="photos" src={srcPath}></img>
                </div>
            </CardContent>
            <div>
                <Button  data-grade={1} variant="contained">Save</Button>


            </div>


        </Card>
    </>;
}
export default Photo;
