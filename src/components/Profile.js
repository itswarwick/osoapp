import React, { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import './Profile.css';

const Profile = ({ onDarkModeToggle, darkMode }) => {
    const [user, setUser] = useState(null);
    const [isDarkMode, setIsDarkMode] = useState(darkMode);

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
        });

        const darkModePreference = localStorage.getItem('darkMode') === 'true';
        setIsDarkMode(darkModePreference);
        document.body.classList.toggle('dark-mode', darkModePreference);

        return () => unsubscribe();
    }, []);

    const handleDarkModeToggle = () => {
        const newDarkMode = !isDarkMode;
        setIsDarkMode(newDarkMode);
        localStorage.setItem('darkMode', newDarkMode);
        document.body.classList.toggle('dark-mode', newDarkMode);
        onDarkModeToggle(newDarkMode);  // Update the parent's state
    };

    const handleSignOut = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            // Sign-out successful.
            console.log("User signed out.");
        }).catch((error) => {
            // An error happened.
            console.error("Error signing out: ", error);
        });
    };

    return (
        <div className="profile">
            <div>
                <h3>ACCOUNT</h3>
                {user && <p>Hello, {user.displayName || 'User'}!</p>}
                <div className="toggle-container">
                    <span>Dark Mode</span>
                    <label className="switch">
                        <input
                            type="checkbox"
                            checked={isDarkMode}
                            onChange={handleDarkModeToggle}
                        />
                        <span className="slider round"></span>
                    </label>
                </div>
            </div>
            <div className="sign-out-container">
                <button onClick={handleSignOut} className="sign-out-button">Sign Out</button>
            </div>
        </div>
    );
};

export default Profile;
