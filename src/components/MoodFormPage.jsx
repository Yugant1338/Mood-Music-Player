import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const MoodFormPage = () => {
    const [genres, setGenres] = useState([]);
    const [selectedGenres, setSelectedGenres] = useState([]); // Stores selected genre IDs
    const [selectedGenreNames, setSelectedGenreNames] = useState([]); // Stores selected genre names
    const [songs, setSongs] = useState({});
    const [loading, setLoading] = useState(false);
    const [answers, setAnswers] = useState({
        mood: "",
        energy: "",
        energyLevel: 50, // Default slider value for energy level
        moodLevel: 50,   // Default slider value for mood level
    });
    const [submittedAnswers, setSubmittedAnswers] = useState(null); // To store submitted answers
    const navigate = useNavigate();

    // Fetch genres from the API
    useEffect(() => {
        const fetchGenres = async () => {
            const token = localStorage.getItem("access_token");
            const genresResponse = await fetch("https://api.spotify.com/v1/browse/categories", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (genresResponse.ok) {
                const genresData = await genresResponse.json();
                setGenres(genresData.categories.items);
            }
        };

        fetchGenres();
    }, []);

    // Handle genre selection
    const handleGenreSelect = (genre) => {
        setSelectedGenres((prevGenres) =>
            prevGenres.includes(genre.id)
                ? prevGenres.filter((g) => g !== genre.id)
                : [...prevGenres, genre.id].slice(0, 3) // Limit to 3 genres
        );

        setSelectedGenreNames((prevGenreNames) => {
            if (selectedGenres.includes(genre.id)) {
                // Remove the genre name if already selected
                return prevGenreNames.filter((name) => name !== genre.name);
            } else {
                // Add the genre name if not selected
                return [...prevGenreNames, genre.name].slice(0, 3); // Limit to 3 genres
            }
        });
    };

    // Fetch playlists based on selected genres
    const fetchPlaylists = async () => {
        setLoading(true);
        const token = localStorage.getItem("access_token");
        const playlists = {};
        for (const genre of selectedGenres) {
            const genreResponse = await fetch(`https://api.spotify.com/v1/browse/categories/${genre}/playlists`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (genreResponse.ok) {
                const genreData = await genreResponse.json();
                playlists[genre] = genreData.playlists.items.slice(0, 4);
            }
        }
        setSongs(playlists);
        setLoading(false);
    };

    // Handle mood and energy form input change
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setAnswers({
            ...answers,
            [name]: value,
        });
    };

    // Handle mood and energy slider change
    const handleSliderChange = (event) => {
        const { name, value } = event.target;
        setAnswers({
            ...answers,
            [name]: value,
        });
    };

    // Handle form submit for mood and energy
    const handleMoodEnergySubmit = (event) => {
        event.preventDefault();
        setSubmittedAnswers(answers); // Store submitted answers in state
    };

    // Handle form submit for fetching playlists
    const handlePlaylistsSubmit = () => {
        fetchPlaylists(); // Fetch playlists based on selected genres
    };

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-semibold mb-4">Select Your Mood Genres</h2>

            {/* Mood and Energy Questionnaire Form */}
            <div className="mb-8">
                <h3 className="text-xl font-semibold">Mood & Energy Questionnaire</h3>
                <form onSubmit={handleMoodEnergySubmit}>
                    {/* Mood Question - MCQ */}
                    <div className="mb-4">
                        <label className="mt-4 block text-base font-medium text-white-900">How are you feeling right now? (Mood)</label>
                        <div className="space-x-4">
                            <label>
                                <input
                                    type="radio"
                                    name="mood"
                                    value="Happy"
                                    onChange={handleInputChange}
                                    checked={answers.mood === "Happy"}
                                    className="mr-2"
                                />
                                Happy
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="mood"
                                    value="Sad"
                                    onChange={handleInputChange}
                                    checked={answers.mood === "Sad"}
                                    className="mr-2"
                                />
                                Sad
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="mood"
                                    value="Neutral"
                                    onChange={handleInputChange}
                                    checked={answers.mood === "Neutral"}
                                    className="mr-2"
                                />
                                Neutral
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="mood"
                                    value="Excited"
                                    onChange={handleInputChange}
                                    checked={answers.mood === "Excited"}
                                    className="mr-2"
                                />
                                Excited
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="mood"
                                    value="Angry"
                                    onChange={handleInputChange}
                                    checked={answers.mood === "Angry"}
                                    className="mr-2"
                                />
                                Angry
                            </label>
                        </div>
                    </div>

                    {/* Energy Level Question - MCQ */}
                    <div className="mb-4">
                        <label className="block text-base font-medium text-white-900">How energetic do you feel right now?</label>
                        <div className="space-x-4">
                            <label>
                                <input
                                    type="radio"
                                    name="energy"
                                    value="High"
                                    onChange={handleInputChange}
                                    checked={answers.energy === "High"}
                                    className="mr-2"
                                />
                                High
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="energy"
                                    value="Medium"
                                    onChange={handleInputChange}
                                    checked={answers.energy === "Medium"}
                                    className="mr-2"
                                />
                                Medium
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="energy"
                                    value="Low"
                                    onChange={handleInputChange}
                                    checked={answers.energy === "Low"}
                                    className="mr-2"
                                />
                                Low
                            </label>
                        </div>
                    </div>

                    {/* Mood Level Slider */}
                    <div className="mb-4">
                        <label className="block text-base font-medium text-white-900">
                            {answers.mood ? `${answers.mood.charAt(0).toUpperCase() + answers.mood.slice(1)}` : ""} Mood Level
                        </label>
                        <input
                            type="range"
                            name="moodLevel"
                            min="1"
                            max="100"
                            value={answers.moodLevel}
                            onChange={handleSliderChange}
                            className="w-full"
                        />
                        <div className="flex justify-between text-xs">
                            <span>1</span>
                            <span>100</span>
                        </div>
                    </div>

                    {/* Energy Level Slider */}
                    <div className="mb-4">
                        <label className="block text-base font-medium text-white-900">Rate your current energy level (1 = Low, 100 = High)</label>
                        <input
                            type="range"
                            name="energyLevel"
                            min="1"
                            max="100"
                            value={answers.energyLevel}
                            onChange={handleSliderChange}
                            className="w-full"
                        />
                        <div className="flex justify-between text-xs">
                            <span>1</span>
                            <span>100</span>
                        </div>
                    </div>

                    {/* Submit Button for Mood & Energy */}
                    <button
                        type="submit"
                        className="mt-4 p-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
                    >
                        Submit Mood & Energy
                    </button>
                </form>
            </div>

            {/* Display Submitted Answers */}
            {submittedAnswers && (
                <div className="mt-8">
                    <h3 className="text-xl font-semibold">Your Submitted Mood & Energy Answers</h3>
                    <p><strong>Mood:</strong> {submittedAnswers.mood}</p>
                    <p><strong>Energy:</strong> {submittedAnswers.energy}</p>
                    <p><strong>Mood Level:</strong> {submittedAnswers.moodLevel}</p>
                    <p><strong>Energy Level:</strong> {submittedAnswers.energyLevel}</p>
                </div>
            )}

            {/* Genre Selection */}
            <div className="mt-4">
                <h3 className="text-xl font-semibold">Select Genres (Max 3)</h3>
                <div className="space-y-2">
                    {genres.map((genre) => (
                        <label key={genre.id} className="block">
                            <input
                                type="checkbox"
                                value={genre.id}
                                onChange={() => handleGenreSelect(genre)}
                                checked={selectedGenres.includes(genre.id)}
                                disabled={selectedGenres.length >= 3 && !selectedGenres.includes(genre.id)}
                                className="mr-2"
                            />
                            {genre.name}
                        </label>
                    ))}
                </div>
            </div>

            {/* Submit Button for Playlists */}
            <button
                type="button"
                onClick={handlePlaylistsSubmit}
                className="mt-4 p-2 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600"
            >
                Show Playlist Based on Genres
            </button>

            {/* Display Playlists */}
            {!loading && Object.keys(songs).length > 0 && (
                <div className="mt-4">
                    <h3 className="text-xl font-semibold">Your Playlist Suggestions</h3>
                    {selectedGenreNames.map((genreName, index) => (
                        <div key={index} className="my-4">
                            <h4 className="font-semibold">{genreName}</h4>
                            <ul>
                                {songs[selectedGenres[index]]?.map((song, idx) => (
                                    <li key={idx}>{song.name}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MoodFormPage;
