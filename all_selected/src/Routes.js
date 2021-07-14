import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainContainer from '../src/components/App';

export default () => (
    <BrowserRouter>
        <>
            <Switch>
                <Route
                    path="/"
                    component={MainContainer}
                />
            </Switch>
        </>
    </BrowserRouter>
);
