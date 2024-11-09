import React, { useState } from "react";

const MoodForm = ({ onSubmit }) => {
    const [mood, setMood] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(mood);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>How are you feeling today?</h3>
            <input
                type="text"
                value={mood}
                onChange={(e) => setMood(e.target.value)}
                placeholder="Enter your mood"
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default MoodForm;
