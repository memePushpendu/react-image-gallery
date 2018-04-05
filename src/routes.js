import React from 'react';
// import Home from './Components/Home';
import Gallery from './PhotoGrid';
import ReactDOM from 'react-dom';
// import GalleryImage from './photo';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

const Routes=()=>(
    <BrowserRouter>
        <Switch>
        <Route exact path='/' component= {Gallery} />
        {/*<Route  path='/Countries' component= {Countries} />*/}
        </Switch>
        </BrowserRouter>
    );
    export default Routes