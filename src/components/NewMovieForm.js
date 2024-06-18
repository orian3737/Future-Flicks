import React, { useState } from "react";

function NewMovieForm({ addNewMovie }) {
    const [formData, setFormData] = useState({
        title: "",
        image: "",
        release_date: "",
        director: "",
        genre: ""
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const movieData = {
            ...formData,
            genre: formData.genre.split(",").map(g => g.trim())
        };
        addNewMovie(movieData);
        setFormData({ title: "", image: "", release_date: "", director: "", genre: "" });
    };

    return (
        <div className="new-movie-form">
            <h2>Add A New Movie</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={formData.title}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="image"
                    placeholder="Image URL"
                    value={formData.image}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="release_date"
                    placeholder="Release Date (YYYY-MM-DD)"
                    value={formData.release_date}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="director"
                    placeholder="Director"
                    value={formData.director}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="genre"
                    placeholder="Genre (comma separated)"
                    value={formData.genre}
                    onChange={handleChange}
                />
                <button type="submit">Add New Movie</button>
            </form>
        </div>
    );
}

export default NewMovieForm;
