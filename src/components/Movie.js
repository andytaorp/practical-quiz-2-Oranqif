import React from "react";

/**
 * TODO: implement the Movie component
 * A single movie item in the movie list, with a checkbox to mark it
 * watched, a text span for the title, and a delete button.
 */

export default function Movie({movie, onToggleWatched, onDeleteMovie}) {
    return (
        <li key={movie.id}>
            <span style={movie.watched ? {textDecoration: "line-through"} : {}}>
                {movie.title}
            </span>
            <input 
            type="checkbox" 
            onClick={() => onToggleWatched(movie.id)}/>
            <button 
            onClick={() => onDeleteMovie(movie.id)}>
                Delete
            </button>
        </li>
    );
};

