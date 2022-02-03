import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from '../containers/Layout';
import { Login } from '../containers/Login';
import { RecoveryPassword } from '../containers/RecoveryPassword';
import { Home } from '../pages/Home';
import { NotFound } from '../pages/NotFound';
import "../style/global.css";

export const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="login" element={<Login />} />
                    <Route exact path="recoveri-pass" element={<RecoveryPassword />} />
                    <Route element={NotFound} />
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}


