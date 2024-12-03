import React, { useState } from "react";

export default function AddMovieForm({ onAddMovie }) {
  const [title, setTitle] = useState("");

  const handleTitle = (e) => {
    setTitle(e.target.value)
  }

  const handleSubmit = (e) => {
    // TODO: write code to handle form submission
    e.preventDefault();
    if (!title) return;
    const newTitle = {id: Date.now(), title: title, watched: false}
    onAddMovie(newTitle);
  };

  return(
    // TODO: add a form to add a new movie
    <form onSubmit={handleSubmit}>
      <input 
      type="text"
      placeholder="Movie Title"
      value={title}
      onChange={handleTitle}
      />
      <button type="submit">Add</button>
    </form>
  )
};
