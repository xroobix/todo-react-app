import { AiFillCarryOut } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
export default function Navbar() {
  const logoIcon = (
    <AiFillCarryOut className="icon" size="40px" fill="#3ABFF8" />
  );

  return (
    <nav className="navbar">
      <div className="list">
        <NavLink to="" className="link">
          Inbox
        </NavLink>
        <NavLink to="today" className="link">
          Today
        </NavLink>
        <NavLink to="nextweek" className="link">
          Next 7 days
        </NavLink>
        <NavLink to="add" className="link">
          Add Todo
        </NavLink>
      </div>
      <div className="logo">
        <h1 className="title">Todos App</h1>
        {logoIcon}
      </div>
    </nav>
  );
}
