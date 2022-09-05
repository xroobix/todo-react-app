import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import SubMenu from './SubMenu';
export default function Sidebar() {
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

  return (
    <nav className='sidebar'>
      <div className="wrapper">
          <div className="list">
            {data.map((page) => (
              <SubMenu
                page={page}
                key={page.id}
              />
            ))}
          </div>
        <div className="add">
          <NavLink to="/add" className="item add">
            <span className="title">Create new ToDo</span>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
