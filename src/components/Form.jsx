import { useEffect, useState } from 'react';
export default function Form({ todo, handleSubmit }) {
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('Personal');
  const day = date.slice(0, 10);
  const hour = date.slice(-5);
  const task = {
    description,
    day,
    hour,
    category,
    completed: false,
  };

  useEffect(() => {
    if (todo) {
      setDescription(todo.description);
      setDate(`${todo.day}T${todo.hour}`);
      setCategory(todo.category);
    }
  }, []);

  return (
    <div className="form">
      <form onSubmit={(e) => handleSubmit(e, task)}>
        <label>Description</label>
        <input
          type="text"
          placeholder="Do some stuff"
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label>Pick a day</label>
        <input
          type="datetime-local"
          onChange={(e) => setDate(e.target.value)}
          value={date}
          required
        />
        <label>Category</label>
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
