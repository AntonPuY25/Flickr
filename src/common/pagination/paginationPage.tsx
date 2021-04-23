import React, {ChangeEvent,useState} from 'react';
import {PATH} from "../../components/navigation/navigation";
import {Redirect} from "react-router-dom";

import {useSelector} from "react-redux";
import {getPagesSelectors} from "../../store/selectors/selectorReducer";
import {AppRootStateType} from "../../store/store";
import {Pagination} from "@material-ui/lab";

const PaginationPage = () => {
    const state = useSelector<AppRootStateType, number>(getPagesSelectors)
    const [pages, setPages] = useState<any>(1)


    return (<>
        <Redirect to={PATH.pictures + '/' + pages}/>


        <Pagination count={state} color="primary"
                    onChange={(event: ChangeEvent<unknown>, page: number) => {
                        setPages(page)
                    }}/>

    </>)
}
export default PaginationPage;