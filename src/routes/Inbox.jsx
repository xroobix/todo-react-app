import { Link } from 'react-router-dom';
import TodoList from '../components/TodoList';
import useFetch from '../hooks/useFetch';
export default function Inbox() {
  const {
    data: tasks,
    isLoading,
    error,
  } = useFetch('http://127.0.0.1:8000/tasks');

  return (
    <>
      {error && <h2 className='error'>{error}</h2>}
      {isLoading && <h2 className='loading'>Loading...</h2>}
      {tasks ? (
        <TodoList tasks={tasks} />
      ) : (
        <Link to="/add" className="btn">
          Create Todo
        </Link>
      )}
    </>
  );
}
