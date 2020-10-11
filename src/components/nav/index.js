import React from 'react';

function Nav() {
    return (
        <nav class="navbar navbar-expand-md navbar-dark bg-dark">
            <a href="index.html" class="navbar-brand">Thomas Coradetti</a>
            <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarMenu">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarMenu">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item"><a href="/" class="nav-link">About Me</a></li>
                    <li class="nav-item"><a href="/portfolio" class="nav-link">Portfolio</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;