import React from 'react';
import './App.css';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import {HomePage} from "./pages/HomePage";
import {withSuspense} from "./assets/hoc/withSuspense";
import {HeaderLayout} from "./components/HeaderLayout";

const NotFound = React.lazy(() => import('./pages/NotFound'));
const StartPage = React.lazy(() => import('./pages/StartPage'));
const PostsPage = React.lazy(() => import('./pages/PostsPage'));

const SuspendedStartPage = withSuspense(StartPage);
const SuspendedPostsPage = withSuspense(PostsPage);

export const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' render={() => <HomePage/>}/>

                <Route exact path='/start' render={() =>
                    <HeaderLayout>
                        <SuspendedStartPage/>
                    </HeaderLayout>
                }/>

                <Route path='/posts/:id?' render={() =>
                    <HeaderLayout>
                        <SuspendedPostsPage/>
                    </HeaderLayout>
                }/>

                <Route exact path='/404' render={withSuspense(NotFound)}/>

                <Route path={'*'} render={() => <Redirect to='/404'/>}/>
            </Switch>
        </BrowserRouter>
    );
};
