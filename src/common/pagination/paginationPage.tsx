import React, {ChangeEvent, useState} from 'react'
import {Redirect} from "react-router-dom"
import {useSelector} from "react-redux";
import {getPagesSelectors} from "../../store/selectors/selectorReducer"
import {AppRootStateType} from "../../store/store"
import {Pagination} from "@material-ui/lab"
import s from './pagination.module.scss'
import {PATH} from "../../App";

const PaginationPage = () => {
    const state = useSelector<AppRootStateType, number>(getPagesSelectors)
    const [pages, setPages] = useState<any>(1)

    return (
        <div className={s.pagination}>
            <Redirect to={PATH.pictures + '/' + pages}/>
            <Pagination count={state} color="primary"
                        onChange={(event: ChangeEvent<unknown>, page: number) => {
                            setPages(page)
                        }}/>

        </div>
    )
}
export default PaginationPage