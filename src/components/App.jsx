import React from 'react';
import { Layout } from '../containers/Layout';
import { Login } from '../containers/Login';
import "../style/global.css";

export const App = () => {
    return (
        <Layout>
            <Login />
        </Layout>
    )
}


