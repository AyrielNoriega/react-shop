import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Layout } from '../containers/Layout';
import { Login } from '../containers/Login';
import { RecoveryPassword } from '../containers/RecoveryPassword';
import "../style/global.css";

export const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Layout>
                    <Route exact path="login" component={Login} />
                    <Route exact path="recoveri-pass" component={RecoveryPassword} />
                </Layout>
            </Switch>
        </BrowserRouter>
    )
}


