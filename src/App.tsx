import React from 'react';
import './App.css';
import Navigation, {PATH} from "./components/navigation/navigation";

import Header from "./components/header/header";
import Menu from "./components/menu/menu";
import Footer from "./components/footer/footer";
import {Redirect, Route, Switch} from "react-router-dom";
import Bookmarks from "./components/bookmarks/bookmarks";
import NotFound from "./components/notFound/notFound";
import Main from "./components/search/main";
import Pictures from "./components/Pictures/pictures";

function App() {

    return (
        <div className={'container'}>
            <Navigation/>
            <div className={'header'}>
                <Header />
            </div>
            <div className={'menu'}>
                <Menu />
            </div>
            <div className={'content'}>
                <Switch>
                    <Route path={PATH.main}
                           render={() => <Main/>}/>
                    <Route  path={PATH.pictures+ "/:id"}
                            render={() => <Pictures/>}/>
                    <Route path={PATH.bookmarks}
                           render={() => <Bookmarks/>}/>
                    <Route path={PATH.page404}
                           render={() => <NotFound/>}/>
                    <Redirect from={PATH.startPage} to={PATH.main}/>
                    <Redirect from={PATH.pageNotFound} to={PATH.page404}/>
                </Switch>
            </div>
            <div className={'footer'}>
                <Footer />
            </div>

        </div>
    );
}

export default App;
