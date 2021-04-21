import React, {useState} from 'react';
import s from "./pagination.module.scss";
import {PATH} from "../../components/navigation/navigation";
import {NavLink} from "react-router-dom";
import {Button} from "@material-ui/core";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import {useSelector} from "react-redux";
import {getPagesSelectors} from "../../store/selectors/selectorReducer";
import {AppRootStateType} from "../../store/store";


const Pagination = ()=>{
    const state = useSelector<AppRootStateType,number>(getPagesSelectors)
    const [pages,setPages]= useState<number>(10)
    const arr = [];
    for (let i = pages-9; i<=pages; i++) {
        arr.push(i)
    }
    const testFunc = (e:React.MouseEvent<HTMLAnchorElement>)=>{
       if(+e.currentTarget.innerText > state){
           e.preventDefault()
       }

    }
    return (
        <div>
            <Button disabled={pages<=11} variant={"contained"} onClick={() => {
                    setPages(pages-10)
            }}><ArrowBackIosIcon fontSize={"default"}/></Button>
            {/*<span style={{fontWeight:'bold'}}>Pages:</span>*/}
             {arr.map((pages,id)=>{
            return <NavLink key={id}   onClick={testFunc}  to={PATH.pictures+'/'+pages}><span  className={s.page }  >{pages}</span></NavLink>

        })}
            <Button disabled={pages>state}  variant={"contained"} onClick={() => {
                setPages(pages+10)
            }}><KeyboardArrowRightIcon fontSize={"large"}/></Button>

        </div>
    )
}
export default Pagination;