import { NavLink } from 'react-router-dom';
export default function Navbar() {
  console.log('render navbar');

  return (
    <nav className="navbar">
      <h1 className="navbar__title">Todo App</h1>
      <div className="navbar__list">
        <NavLink to="" className="link">
          <span>Inbox</span>
        </NavLink>
        <NavLink to="today" className="link">
          <span>Today</span>
        </NavLink>
        <NavLink to="nextweek" className="link">
          <span>Next 7 days</span>
        </NavLink>
      </div>
    </nav>
  );
}
