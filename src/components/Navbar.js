import React, { useState } from 'react';
import {  Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";

const Navbar = () => {
    // const [navbarOpen, setNavbarOpen] = useState(false);
    // const handleToggle = () => {
    //     setNavbarOpen(prev => !prev);
    // }
    const [toggle, setToggle] = useState(false);
    const clickHandler = () => {
        setToggle(!toggle);
    };


    return (
        <nav className="nav">

            <Link to="/Kasia" className="nav__logo">Katarzyna Durbas</Link>
            <button className="nav__toggle-btn" >
                <BiMenu  onClick={clickHandler}/>
            </button>
            <div className="nav__menu">
                <ul className="" style={{ display: toggle ? 'flex' : 'none'}}>
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


        </nav>
    );
};

export default Navbar;