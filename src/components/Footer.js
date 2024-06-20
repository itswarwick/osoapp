import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Footer.css';

function Footer({ darkMode }) {
    const location = useLocation();

    return (
        <footer className={`footer ${darkMode ? 'dark-mode' : ''}`}>
            <Link to="/" className={`footer-icon ${location.pathname === '/' ? 'active' : ''}`}>
                <img
                    src={darkMode ? "https://cdn.shopify.com/s/files/1/0677/8601/5024/files/gym-weights-workout-svgrepo-com_1.svg?v=1717907620" : "https://cdn.shopify.com/s/files/1/0677/8601/5024/files/gym-weights-workout-svgrepo-com.svg?v=1717810980"}
                    alt="Workouts Tab"
                    className="icon"
                />
            </Link>
            <Link to="/events" className={`footer-icon ${location.pathname === '/events' ? 'active' : ''}`}>
                <img
                    src={darkMode ? "https://cdn.shopify.com/s/files/1/0677/8601/5024/files/calendar-search-svgrepo-com_2.svg?v=1717907620" : "https://cdn.shopify.com/s/files/1/0677/8601/5024/files/calendar-search-svgrepo-com_3.svg?v=1717909061"}
                    alt="Events Tab"
                    className="icon"
                />
            </Link>
            <Link to="/stats" className={`footer-icon ${location.pathname === '/stats' ? 'active' : ''}`}>
                <img
                    src={darkMode ? "https://cdn.shopify.com/s/files/1/0677/8601/5024/files/chart-line-svgrepo-com_1.svg?v=1717907620" : "https://cdn.shopify.com/s/files/1/0677/8601/5024/files/chart-line-svgrepo-com.svg?v=1717810980"}
                    alt="Stats Tab"
                    className="icon"
                />
            </Link>
            <Link to="/profile" className={`footer-icon ${location.pathname === '/profile' ? 'active' : ''}`}>
                <img
                    src={darkMode ? "https://cdn.shopify.com/s/files/1/0677/8601/5024/files/profile-1341-svgrepo-com_1.svg?v=1717907620" : "https://cdn.shopify.com/s/files/1/0677/8601/5024/files/profile-1341-svgrepo-com.svg?v=1717810980"}
                    alt="Profile Tab"
                    className="icon"
                />
            </Link>
        </footer>
    );
}

export default Footer;
