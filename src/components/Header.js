import React from "react";

import "./Header.css";

import logo from "../../assets/images/logo.svg";
import menu from "../../assets/images/icon-menu.svg";
import menuClose from "../../assets/images/icon-menu-close.svg";

const Header = () => {
    const navLinks = ["Home", "New", "Popular", "Trending", "Categories"];

    const listItems = navLinks.map((link) => {
        return (
            <li key={link.toLowerCase()}>
                <a href="#">{link}</a>
            </li>
        )
    });

    return (
        <header>
            <nav>
                {/* <a href="#">
                    <img src={ logo } />
                </a> */}
                <div>
                    <a href="#">
                        LOGO
                    </a>
                </div>
                <div>
                    <img src={ menu } />
                </div>
                {/* <ul>
                    { listItems }
                </ul> */}
            </nav>
        </header>
    )
}

export default Header;
