import React from 'react';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import './App.css';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';

function App() {
    const openSidebar = () => {
        document.querySelector(".sidebar").classList.add("open");
    }

    const closeSidebar = () => {
        document.querySelector(".sidebar").classList.remove("open");
    }

    return (
        <BrowserRouter>
            <div className="grid-container">
            <header className="header">
                <div className="brand">
                    <button onClick={openSidebar}>
                        &#9776;
                    </button>
                    <Link to="/">Drabužių parduotuvė</Link>
                </div>
                <div className="header-links">
                    <a href="cart">Krepšelis</a>
                    <a href="signin">Prisijungti</a>
                </div>
            </header>
            <aside className="sidebar">
                <h3>Drabužių kategorijos</h3>
                <button className="sidebar-close-button" onClick={closeSidebar}>X</button>
                <ul>
                    <li>
                        <a href="index.html">Kelnės</a>
                    </li>
                    <li>
                        <a href="index.html">Marškiniai</a>
                    </li>
                </ul>
            </aside>
            <main className="main">
                <div className="content">
                    <Route path="/product/:id" component={ProductScreen}></Route>
                    <Route path="/" exact={true} component={HomeScreen}></Route>

                </div>
            </main>
            <footer className="footer">
                All rights reserved.
            </footer>
            </div>
        </BrowserRouter>    
    );
}

export default App;
