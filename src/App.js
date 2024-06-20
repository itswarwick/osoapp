import React, { useState, useEffect } from 'react';
import { onAuthStateChanged, getRedirectResult } from 'firebase/auth';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Calendar from './components/Calendar';
import Events from './components/Events';
import Stats from './components/Stats';
import Profile from './components/Profile';
import SignIn from './components/SignIn';
import WorkoutDetails from './components/WorkoutDetails';
import { auth } from './firebase'; // Ensure this import is correct
import './App.css';

function App() {
    const [user, setUser] = useState(null);
    const [selectedDay, setSelectedDay] = useState('');
    const [selectedDate, setSelectedDate] = useState('');
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                localStorage.setItem('user', JSON.stringify(user));
            } else {
                setUser(null);
                localStorage.removeItem('user');
            }
        });

        // Handle redirect result
        getRedirectResult(auth)
            .then((result) => {
                if (result && result.user) {
                    console.log("Redirect result:", result.user);
                    setUser(result.user);
                    localStorage.setItem('user', JSON.stringify(result.user));
                }
            })
            .catch((error) => {
                console.error("Error during redirect sign-in:", error);
            });

        return () => unsubscribe();
    }, []);

    useEffect(() => {
        const darkModePreference = localStorage.getItem('darkMode') === 'true';
        setDarkMode(darkModePreference);
        document.body.classList.toggle('dark-mode', darkModePreference);
    }, []);

    const handleDarkModeToggle = (newDarkMode) => {
        setDarkMode(newDarkMode);
        localStorage.setItem('darkMode', newDarkMode);
        document.body.classList.toggle('dark-mode', newDarkMode);
    };

    return (
        <Router>
            <div className="App">
                {user && <Header darkMode={darkMode} />}
                <main className="content">
                    {user ? (
                        <Routes>
                            <Route path="/" element={
                                <>
                                    <div className="intro-text">
                                        <h1>Workouts,</h1>
                                        <h1>on the go.</h1>
                                        <p>Enjoy this week's workouts. All of these workouts are done in public gyms or outdoors. Improvise where needed.</p>
                                        <p>Hit 'Share' and then 'Add to Home Screen' for an app-like experience!</p>
                                    </div>
                                    <Calendar
                                        selectedDay={selectedDay}
                                        selectedDate={selectedDate}
                                        setSelectedDay={setSelectedDay}
                                        setSelectedDate={setSelectedDate}
                                    />
                                    <hr className="separator" />
                                    <WorkoutDetails selectedDate={selectedDate} />
                                </>
                            } />
                            <Route path="/events" element={<Events />} />
                            <Route path="/stats" element={<Stats />} />
                            <Route path="/profile" element={<Profile onDarkModeToggle={handleDarkModeToggle} darkMode={darkMode} />} />
                        </Routes>
                    ) : (
                        <SignIn />
                    )}
                </main>
                {user && <Footer darkMode={darkMode} />}
            </div>
        </Router>
    );
}

export default App;
