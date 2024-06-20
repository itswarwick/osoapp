import React, { useState, useEffect } from 'react';
import './Calendar.css';

const getLastMonday = (date) => {
    const day = date.getDay();
    const diff = date.getDate() - day + (day === 0 ? -6 : 1);
    return new Date(date.setDate(diff));
};

function Calendar({ selectedDay, selectedDate, setSelectedDay, setSelectedDate }) {
    const [dates, setDates] = useState([]);

    useEffect(() => {
        generateDates();
        const today = new Date();
        setSelectedDay(['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'][today.getDay()]);
        setSelectedDate(`${today.getFullYear()}-${(today.getMonth() + 1).toString().padStart(2, '0')}-${today.getDate().toString().padStart(2, '0')}`);
    }, [setSelectedDay, setSelectedDate]);

    const generateDates = () => {
        const today = new Date();
        const lastMonday = getLastMonday(today);
        const datesArray = [];
        for (let i = 0; i < 7; i++) {
            const date = new Date(lastMonday);
            date.setDate(lastMonday.getDate() + i);
            datesArray.push(date);
        }
        setDates(datesArray);
    };

    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const fullDays = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY'];

    const handleDayClick = (day, date) => {
        const selectedFullDay = fullDays[days.indexOf(day)];
        const selectedFormattedDate = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
        setSelectedDay(selectedFullDay);
        setSelectedDate(selectedFormattedDate);
    };

    return (
        <div className="calendar">
            {days.map((day, index) => (
                <div
                    key={day}
                    className={`day ${fullDays[index] === selectedDay ? 'selected' : ''}`}
                    onClick={() => handleDayClick(day, dates[index])}>
                    <div>{day}</div>
                    <div>{dates[index] ? dates[index].getDate() : ''}</div>
                </div>
            ))}
        </div>
    );
}

export default Calendar;
