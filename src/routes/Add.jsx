import { useNavigate } from 'react-router-dom';
import Form from '../components/Form';
export default function Add() {
  const navigate = useNavigate();
  let pressed = false;

  function handleSubmit(e, task) {
    e.preventDefault();
    if (pressed) return;
    pressed = true;

    fetch('http://localhost:8000/tasks/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(task),
    }).then(() => {
      navigate('/');
    });
  }

  return <Form handleSubmit={handleSubmit} />;
}
