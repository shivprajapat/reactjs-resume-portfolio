import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { navLinks } from '../routerData';
import { FaReact, FaBars } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import './style.scss'
const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => {
        setClick(!click)
    }
    return (
        <nav className='navbar'>
            <div className="navbar_container">
                <Link to="/" className="navbar_container_logo">
                    <FaReact />
                </Link>
                <ul className={click ? 'navbar_container_menu active' : 'navbar_container_menu'}>
                    {
                        navLinks && navLinks.map((item, index) => {
                            const { to, label } = item;
                            return (
                                <li className='navbar_container_menu_item' key={index}>
                                    <Link to={to} className='navbar_container_menu_item_link'>
                                        {label}
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
                    <button className='nav-icon' onClick={handleClick}>{
                        click ? <HiX /> : <FaBars />
                    }</button>
            </div>
        </nav>
    )
}

export default Navbar