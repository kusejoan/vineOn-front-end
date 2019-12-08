import React from 'react';
import './App.css';
import { LoginPage } from './LoginPage';
import { Navbar } from './Navbar';


export const App = () => (
    <React.Fragment>
        <Navbar/>
        <LoginPage/>
    </React.Fragment>
)
