import React from 'react';
import {Link} from "react-router-dom";

const DesktopMenu = () => {
    return (
        <div className='desktop-menu'>
            <ul className="" >
                <li className="nav__item">
                    <Link to="/">Welcome</Link>
                </li>
                <li className="nav__item">
                    <Link to="/about">About me</Link>
                </li>
                <li className="nav__item">
                    <Link to="/portfolio">Portfolio</Link>
                </li>
                <li className="nav__item">
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>

        </div>
    );
};

export default DesktopMenu;