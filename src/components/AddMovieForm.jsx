import { useState } from "react";

function AddMovieForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!title || !year) return;

    onAdd({
      id: Date.now(),
      title,
      year: Number(year),
    });
    setTitle("");
    setYear("");
  }

  return (
    <form action="" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Movie Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="number"
        placeholedr="Release Year"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />
      <button type="submit">Add movie</button>
    </form>
  );
}
export default AddMovieForm;
