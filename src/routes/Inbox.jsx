import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import TodoList from '../components/TodoList';
export default function Inbox() {
  const [shouldFetch, setShouldFetch] = useState(false);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/tasks')
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
        setShouldFetch(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.message);
      });
  }, [shouldFetch]);

  function handleChange() {
    setShouldFetch(true);
  }

  return (
    <>
      {isLoading ? (
        <h2 className="loading">Loading...</h2>
      ) : error ? (
        <h2 className="error">{error}</h2>
      ) : data ? (
        <TodoList tasks={data} handleChange={handleChange} />
      ) : (
        <Link to="/add" className="btn">
          Create Todo
        </Link>
      )}
    </>
  );
}
