import React, {useState} from 'react'
import './App.css'
import Header from "./components/header/header"
import Menu from "./components/menu/menu"
import Footer from "./components/footer/footer";
import {Redirect, Route, Switch} from "react-router-dom"
import Bookmarks from "./components/bookmarks/bookmarks"
import NotFound from "./components/notFound/notFound"
import Pictures from "./components/Pictures/pictures"
import {Button} from "@material-ui/core"

export const PATH={
    pictures:'/pictures',
    bookmarks:'/bookmarks',
    pageNotFound: "*",
    page404: "/pageNotFound",
    startPage:'/',
}

function App() {
    const [modal, setModal] = useState<boolean>(false)
    let countDownDate = dateAdd(4)
    const x = setInterval(function () {
        callFun(+countDownDate)
    }, 1000)

    function dateAdd(units: number) {
        const ret = new Date()
        ret.setTime(ret.getTime() + units * 1000)
        return ret
    }

    const callFun = function (countDownDate: number) {
        let now = new Date().getTime()
        let distance = countDownDate - now
        if (distance <= 0) {
            setModal(true)
            clearInterval(x)
        }
    }
    $('*').on(
        'blur change click dblclick error focus focusin focusout hover keydown keypress' +
        ' keyup load mousedown mouseenter mouseleave mousemove mouseout mouseover mouseup resize scroll select submit',
        function (x1) {
            countDownDate = dateAdd(10)
        }
    )

    return <>
        <div className={modal ? 'popup' : 'hide'}>
            <div className={'popupContent'}>
                <Button color='default'
                        variant={"text"}
                        onClick={() => setModal(false)}>Are you going to continue working?
                </Button>

            </div>
        </div>
        <div className={'container'}>
            <div className={'header'}>
                <Header/>
            </div>
            <div className={'menu'}>
                <Menu/>
            </div>
            <div className={'content'}>
                <Switch>
                    <Route path={PATH.pictures + "/:id"}
                           render={() => <Pictures/>}/>
                    <Route path={PATH.bookmarks}
                           render={() => <Bookmarks/>}/>
                    <Route path={PATH.page404}
                           render={() => <NotFound/>}/>
                    <Redirect from={PATH.startPage} to={PATH.pictures + '/' + 1}/>
                    <Redirect from={PATH.pageNotFound} to={PATH.page404}/>
                </Switch>
            </div>
            <div className={'footer'}>
                <Footer/>
            </div>
        </div>
    </>
}
export default App
