import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

function Header({ darkMode }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setMenuOpen(prevState => !prevState);
    };

    const handleLinkClick = () => {
        setMenuOpen(false);
    };

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target) && !event.target.classList.contains('menu-icon')) {
            setMenuOpen(false);
        }
    };

    useEffect(() => {
        if (menuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [menuOpen]);

    return (
        <header className={`header ${darkMode ? 'dark-mode' : ''}`}>
            <img
                src={darkMode ? "https://cdn.shopify.com/s/files/1/0677/8601/5024/files/newlogo_align_left_white.png?v=1717907379" : "https://cdn.shopify.com/s/files/1/0677/8601/5024/files/newlogo_align_left.png?v=1717812076"}
                alt="OSO Logo"
                className="logo"
            />
            <img
                src={darkMode ? "https://cdn.shopify.com/s/files/1/0677/8601/5024/files/menu-svgrepo-com_2.svg?v=1717907819" : "https://cdn.shopify.com/s/files/1/0677/8601/5024/files/menu-svgrepo-com.svg?v=1717212238"}
                alt="Menu Icon"
                className="menu-icon"
                onClick={toggleMenu}
            />
            {menuOpen && (
                <div className="dropdown-menu" ref={menuRef}>
                    <a href="https://osoclo.com/collections/all" target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}>Shop</a>
                    <a href="https://osoclo.com/pages/about-us" target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}>About Us</a>
                </div>
            )}
        </header>
    );
}

export default Header;
