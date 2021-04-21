import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import {PATH} from "../navigation/navigation";
import {FormControl} from "@material-ui/core";
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import s from './header.module.scss'

const Header = () => {
    const [searchValue,setSearchValue] = useState<string>('')
    const [error,setError] = useState<boolean>(false)
const searchFunc = (e:React.MouseEvent<HTMLAnchorElement>)=>{
    if(searchValue.length<1){
        e.preventDefault()
        setError(true)
    }else{
        setError(false)
        sessionStorage.setItem('searchValue', searchValue);
    }
}
    return <>
        <div className={s.input}>
            <FormControl >
                <InputLabel htmlFor="standard-adornment-password">Search</InputLabel>
                <Input

                    onChange={(e)=>setSearchValue(e.currentTarget.value)}
                    id="standard-adornment-password"
                    endAdornment={
                        <InputAdornment position="end">
                            <NavLink  onClick={searchFunc} to={PATH.pictures+'/'+1}>
                                <SearchIcon
                                    aria-label="toggle password visibility"
                                   >
                                </SearchIcon>
                            </NavLink>
                        </InputAdornment>
                    }
                />
                {error?  <span className={s.error}>Please enter your search result </span>:''}
            </FormControl>
        </div>

    </>

}


export default Header;