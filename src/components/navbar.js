import React, { useState } from 'react';
import './navbar.css';
function MobileMenu() {
    return (
        <nav id="main-nav-mobile" className={`dn absolute top-100 tc right-0 w-100 w-40-ns pa2 bg-moon-gray ba`}>
            <a href="#" className="link db ph2 pv3 color-inherit">Features</a>
            <a href="#" className="link db ph2 pv3 color-inherit">Pricing</a>
            <a href="#" className="link db ph2 pv3 color-inherit ba br2">Sign up</a>
        </nav>
    );
}

function Header() {
    const toggleMenu = () => {
        const menu = document.getElementById('main-nav-mobile');
        menu.classList.toggle('db');
        menu.classList.toggle('dn');
        console.log(menu.classList);
    };

    return (
        <header className="pv3 ph2 relative bb">
            <div id="container" className="flex justify-between items-center">
                <div id="logo" className="overflow-hidden">
                    <a href="#" className="link color-inherit">Logo</a>
                </div>

                <a href="#0" id="mobile-menu-toggle" className="link color-inherit pa3 dn-l" onClick={toggleMenu}>
                    ☰ Menu
                </a>

                <nav id="main-nav" className="dn db-l">
                    <a href="#" className="link db dib-l pa2 pv2 color-inherit">Features</a>
                    <a href="#" className="link db dib-l pa2 pv2 color-inherit">Pricing</a>
                    <a href="#" className="link dib pa2 pv2 color-inherit ba br2">Sign up</a>
                </nav>

                <MobileMenu />
            </div>
        </header>
    );
}


export default Header; 
