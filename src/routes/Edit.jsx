import { useEffect, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
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

  const errorMessage = (
    <div className="notfound">
      <p>¯\_(ツ)_/¯</p>
      <h1>Oops...</h1>
      <h2 className="error">{error}</h2>
      <Link to="" className="go-back">
        Click here to go back
      </Link>
    </div>
  )

  return (
    <>
      {isLoading ? (
        <h2 className="loading">Loading...</h2>
      ) : error ? (
        errorMessage
      ) : (
        data && <Form todo={data} handleSubmit={handleSubmit} />
      )}
    </>
  );
}
