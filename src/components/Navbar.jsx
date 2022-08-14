import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <nav className="navbar">
      <h1>Todo App</h1>
      <div className="navbar list">
        <Link to="/">Inbox</Link>
        <Link to="/today">Today</Link>
        <Link to="/nextweek">Next 7 days</Link>
      </div>
    </nav>
  );
}
