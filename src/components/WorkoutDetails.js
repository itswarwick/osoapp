import React from 'react';
import workouts from '../Workouts.json'; // Adjust the path as needed
import './WorkoutDetails.css';

const WorkoutDetails = ({ selectedDate }) => {
    // Extract the workout for the selected date
    const workout = workouts[selectedDate] ? workouts[selectedDate][Object.keys(workouts[selectedDate])[0]] : null;

    if (!workout) {
        return (
            <div className="workout-details">
                No workout found for this date.
            </div>
        );
    }

    return (
        <div className="workout-details">
            <h2>{workout.title}</h2>
            {workout.details && <p>{workout.details}</p>}
            {workout.exercises && (
                <ul className="workout-list">
                    {workout.exercises.map((exercise, index) => (
                        <li key={index}>{exercise}</li>
                    ))}
                </ul>
            )}
            {workout.phases && workout.phases.map((phase, index) => (
                <div key={index} className="workout-phase">
                    <h3>{phase.phase_title}</h3>
                    {phase.details && <p>{phase.details}</p>}
                    <ul className="workout-list">
                        {phase.exercises.map((exercise, index) => (
                            <li key={index}>{exercise}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default WorkoutDetails;
