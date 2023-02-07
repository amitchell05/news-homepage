import React from "react";

import logo from "../../assets/images/logo.svg";

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
            <img src={ logo } />
            <nav>
                <ul>
                    { listItems }
                </ul>
            </nav>
        </header>
    )
}

export default Header;
