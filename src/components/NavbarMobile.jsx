import { useEffect, useState } from 'react';
import { AiFillCarryOut, AiOutlineClose } from 'react-icons/ai';
import { FaBars } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import SubMenu from './SubMenu';
export default function Navbar() {
  const [displaySidebar, setDisplaySidebar] = useState(false);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/navbar')
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

  const logoIcon = (
    <AiFillCarryOut className="icon" size="2.5em" fill="#3ABFF8" />
  );

  const burgerIcon = (
    <FaBars
      className="hamburger"
      onClick={showSidebar}
      size="2.5em"
      fill="#3ABFF8"
    />
  );

  const closeIcon = (
    <AiOutlineClose
      className="close"
      onClick={showSidebar}
      size="2.5em"
      fill="#3ABFF8"
    />
  );

  function showSidebar() {
    setDisplaySidebar(!displaySidebar);
  }

  return (
    <div className="navbar-mobile">
      <div className="topnav">
        <div className="burger-button">{burgerIcon}</div>
        <div className="logo">
          <h1 className="title">ToDo App</h1>
          {logoIcon}
        </div>
      </div>
      <nav className={displaySidebar ? 'sidebar-mobile active' : 'sidebar-mobile'}>
        <div className="wrapper">
          <div className="pages">
            <div className="close-button">{closeIcon}</div>
            <div className="list">
              {data.map((page) => (
                <SubMenu
                  page={page}
                  key={page.id}
                  showSidebar={showSidebar}
                />
              ))}
            </div>
          </div>
          <div className="add" onClick={showSidebar}>
            <NavLink to="/add" className="item add">
              <span className="title">Create new Todo</span>
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
}
