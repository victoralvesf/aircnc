import React from 'react';

import logo from './assets/logo.svg';
import './App.css';

import Routes from './routes';

function App() {
    return (
        <div className="container">
            <img src={logo} className="logo" alt="Aircnc" />
            <div className="content">
                <Routes />
            </div>
        </div>
    );
}

export default App;