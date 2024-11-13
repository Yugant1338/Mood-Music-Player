import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css"
const MoodFormPage = () => {
    const [genres, setGenres] = useState([]);
    const [selectedGenres, setSelectedGenres] = useState([]); // Stores selected genre IDs
    const [genrePlaylistPairs, setGenrePlaylistPairs] = useState([]); // Pairs genre names with playlists
    const [loading, setLoading] = useState(false);
    const [answers, setAnswers] = useState({
        mood: "",
        energy: "",
        energyLevel: 50, // Default slider value for energy level
        moodLevel: 50,   // Default slider value for mood level
    });
    const constGenres = [
        { id: "", genre: "Pop" },
        { id: "", genre: "Party" },
        { id: "", genre: "Summer" },
        { id: "", genre: "Charts" },
        { id: "", genre: "Discover" }
    ];
    const [submittedAnswers, setSubmittedAnswers] = useState(null); // To store submitted answers
    const navigate = useNavigate();
    
    const pairIdWithGenre = (constGenre) => {
        for (let genre of genres) {
            if (genre.name === constGenre) {
                return genre.id;
            }
        }
    };

    for (let i = 0; i < constGenres.length; i++) {
        constGenres[i].id = pairIdWithGenre(constGenres[i].genre);
    }

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
    };

    // Fetch playlists and update genrePlaylistPairs on submit
    const handlePlaylistsSubmit = async () => {
        setLoading(true);
        const token = localStorage.getItem("access_token");
        const pairs = [];

        for (const genre of selectedGenres) {
            const genreResponse = await fetch(`https://api.spotify.com/v1/browse/categories/${genre}/playlists`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (genreResponse.ok) {
                const genreData = await genreResponse.json();
                const genreName = genres.find((g) => g.id === genre)?.name;
                pairs.push({
                    genreName: genreName || "Unknown Genre",
                    playlists: genreData.playlists.items.slice(0, 5), // Limit to 5 playlists per genre
                });
            }
        }

        // Fetch playlists for constGenres
        for (const genre of constGenres) {
            if (genre.id) {
                const genreResponse = await fetch(`https://api.spotify.com/v1/browse/categories/${genre.id}/playlists`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (genreResponse.ok) {
                    const genreData = await genreResponse.json();
                    pairs.push({
                        genreName: genre.genre,
                        playlists: genreData.playlists.items.slice(0, 5), // Limit to 5 playlists
                    });
                }
            }
        }

        setGenrePlaylistPairs(pairs);
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

            {/* Display submitted answers */}
            {submittedAnswers && (
                <div className="my-4">
                    <h4 className="text-lg font-semibold">Your Submitted Answers</h4>
                    <p>Mood: {submittedAnswers.mood}</p>
                    <p>Energy: {submittedAnswers.energy}</p>
                    <p>Mood Level: {submittedAnswers.moodLevel}</p>
                    <p>Energy Level: {submittedAnswers.energyLevel}</p>
                </div>
            )}

            {/* Select genres */}
            <h3 className="text-xl font-semibold mb-4">Select up to 3 Genres</h3>
            <div className="flex flex-wrap gap-5 mb-4">
                {genres.map((genre) => (
                    <button
                        key={genre.id}
                        className={`p-2 rounded-md font-medium ${
                            selectedGenres.includes(genre.id) ? "bg-blue-500 text-white=" : "bg-gray-200 text-black"
                        }`}
                        onClick={() => handleGenreSelect(genre)}
                    >
                        <img className = "genreImg" src={genre.icons[0].url}/>
                        {genre.name}
                    </button>
                ))}
            </div>

            {/* Submit button for playlist */}
            <button
                onClick={handlePlaylistsSubmit}
                className="p-2 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600"
                disabled={selectedGenres.length === 0 || loading}
            >
                {loading ? "Loading..." : "Submit for Playlists"}
            </button>

            {/* Display genre and playlists */}
            {genrePlaylistPairs.length > 0 && (
                <div className="my-8">
                    {genrePlaylistPairs.map((pair, index) => (
                        <div key={index} className="mb-4">
                            <h4 className="text-lg font-semibold">{pair.genreName} Playlists</h4>
                            <ul>
                                {pair.playlists.map((playlist, i) => (
                                    <li key={i} className="text-blue-700">
                                        <a href={playlist.external_urls.spotify} target="_blank" rel="noopener noreferrer">
                                            {playlist.name}
                                        </a>
                                    </li>
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
