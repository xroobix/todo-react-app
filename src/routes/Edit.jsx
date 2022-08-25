import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Form from '../components/Form';
export default function Edit() {
  const { todoId } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  let pressed = false;

  useEffect(() => {
    fetch('http://127.0.0.1:8000/tasks/' + todoId)
      .then((res) => {
        if (!res.ok) {
          throw Error("Couldn't fetch data");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setIsLoading(false);
        setError(null);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.message);
      });
  }, []);

  function handleSubmit(e, task) {
    e.preventDefault();
    if (pressed) return;
    pressed = true;
    task = { ...task, id: todoId };

    fetch('http://localhost:8000/tasks/' + todoId, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(task),
    }).then(() => {
      navigate(-1);
    });
  }

  return (
    <>
      {isLoading ? (
        <h2 className="loading">Loading...</h2>
      ) : error ? (
        <h2 className="error">{error}</h2>
      ) : (
        data && <Form todo={data} handleSubmit={handleSubmit} />
      )}
    </>
  );
}
