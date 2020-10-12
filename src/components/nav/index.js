import React from 'react';
import { Link } from 'react-router-dom';


function Nav() {
    return (
        <nav class="navbar navbar-expand-md navbar-dark bg-dark">
            <a href="index.html" class="navbar-brand">Thomas Coradetti</a>
            {/* <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarMenu">
                <span class="navbar-toggler-icon"></span>
            </button> */}
            <div id="navbarMenu">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item"><Link to="/" class="nav-link">About Me</Link></li>
                    <li class="nav-item"><Link to="/portfolio" class="nav-link">Portfolio</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;