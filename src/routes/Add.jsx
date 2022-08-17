import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function Add() {
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('Personal');
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();

  const day = date.slice(0, 10)
  const hour = date.slice(-5)

  function handleSubmit(e) {
    e.preventDefault();
    const task = {
      description,
      day,
      hour,
      category,
    };

    setIsPending(true);

    fetch('http://localhost:8000/tasks/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(task),
    }).then(() => {
      console.log('new blog added');
      setIsPending(false);
      navigate('/');
    });
  }

  return (
    <div className="create">
      <form onSubmit={handleSubmit}>
        <label>Description</label>
        <input
          type="text"
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label>Pick a day</label>
        <input
          type="datetime-local"
          className="form-control"
          placeholder="Date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
          required
        />
        <label>Blog author</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Personal">Personal</option>
          <option value="Work">Work</option>
          <option value="Study">Study</option>
        </select>
        <button className="submit">Add Todo</button>
      </form>
    </div>
  );
}
