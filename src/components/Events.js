import React from 'react';
import './Events.css';

function Events({ darkMode }) {
    return (
        <div className={`page-content ${darkMode ? 'dark-mode' : ''}`}>
            <h1>Events</h1>
            <p>Details about events will be shown here. Coming Soon.</p>
        </div>
    );
}

export default Events;