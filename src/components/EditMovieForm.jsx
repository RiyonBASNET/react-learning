import { useState } from "react";

function EditMovieForm({ movie, onSave, onCancel }) {
  const [form, setForm] = useState({
    title: movie.title,
    year: movie.year,
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    onSave({
      ...movie,
      title: form.title,
      year: Number(form.year),
    });
  }

  return (
    <form action="" onSubmit={handleSubmit}>
      <input
        name="title"
        type="text"
        value={form.title}
        onChange={handleChange}
      />
      <input
        name="year"
        type="number"
        value={form.year}
        onChange={handleChange}
      />

      <button type="submit">Save</button>
      <button type="button" onClick={onCancel}>
        Cancel
      </button>
    </form>
  );
}

export default EditMovieForm;
