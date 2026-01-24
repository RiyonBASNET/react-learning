import { useState } from "react";

function AddMovieForm2({ onAdd }) {
  const [form, setForm] = useState({
    title: "",
    year: "",
  });

  const [error, setError] = useState(null);

  function handleChange(e) {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.title || !form.year) {
      setError("All fields is required.");
      return;
    }

    onAdd({
      title: form.title,
      year: Number(form.year),
    });

    setForm({ title: "", year: "" });
    setError(null);
  }

  return (
    <form action="" onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Movie Title"
        value={form.title}
        onChange={handleChange}
      />

      <input
        type="number"
        name="year"
        placeholder="Release Year"
        value={form.year}
        onChange={handleChange}
      />
      <button type="submit">Add movie</button>

      {error && <p>{error}</p>}
    </form>
  );
}
export default AddMovieForm2;
