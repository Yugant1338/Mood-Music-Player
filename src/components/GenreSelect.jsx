import React, { useState } from "react";

const GenreSelect = ({ genres, onGenreSubmit }) => {
    const [selectedGenres, setSelectedGenres] = useState([]);

    const handleGenreChange = (e) => {
        const genreId = e.target.value;
        if (e.target.checked) {
            if (selectedGenres.length < 3) {
                setSelectedGenres([...selectedGenres, genreId]);
            }
        } else {
            setSelectedGenres(selectedGenres.filter((id) => id !== genreId));
        }
    };

    const handleSubmit = () => {
        onGenreSubmit(selectedGenres);
    };

    return (
        <div>
            <h3>Select Up to 3 Genres</h3>
            <form onSubmit={(e) => e.preventDefault()}>
                {genres.map((genre) => (
                    <div key={genre.id}>
                        <input
                            type="checkbox"
                            id={genre.id}
                            value={genre.id}
                            onChange={handleGenreChange}
                            disabled={selectedGenres.length >= 3 && !selectedGenres.includes(genre.id)}
                        />
                        <label htmlFor={genre.id}>{genre.name}</label>
                    </div>
                ))}
                <button onClick={handleSubmit} disabled={selectedGenres.length === 0}>
                    Submit
                </button>
            </form>
        </div>
    );
};

export default GenreSelect;
