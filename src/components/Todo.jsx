import { useEffect, useState } from 'react';
import {
  AiOutlineEdit,
  AiOutlineLeft,
  AiOutlineRight,
} from 'react-icons/ai';
import { BsCheckCircleFill, BsCircle } from 'react-icons/bs';
import { MdDeleteOutline } from 'react-icons/md';
import { Link } from 'react-router-dom';
export default function Todo(props) {
  const [data, setData] = useState(props);
  const [showMenu, setShowMenu] = useState(false);
  const { description, day, hour, category, completed, id } =
    data.day;

  useEffect(() => {
    setData(props);
  }, [props]);

  const arrowDownIcon = (
    <AiOutlineRight
      size="1.25em"
      className="arrow-down"
      onClick={() => setShowMenu((menu) => !menu)}
    />
  );

  const arrowUpIcon = (
    <AiOutlineLeft
      size="1.25em"
      className="arrow-up"
      onClick={() => setShowMenu((menu) => !menu)}
    />
  );

  const notCheckedIcon = (
    <BsCircle
      size="1.5em"
      className={`dot ${category.toLowerCase()}`}
      onClick={() => handleCompleted()}
    />
  );

  const checkedIcon = (
    <BsCheckCircleFill
      size="1.5em"
      className={`dot completed`}
      onClick={() => handleCompleted()}
    />
  );

  const editIcon = (
    <AiOutlineEdit size="1em" className="icon" fill="white" />
  );

  const removeIcon = (
    <MdDeleteOutline size="1em" className="icon" fill="white" />
  );

  function handleCompleted() {
    const todo = {
      description,
      day,
      hour,
      category,
      completed: !completed,
      id,
    };
    fetch('http://localhost:8000/tasks/' + id, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(todo),
    })
    props.handleChange()
  }

  const menu = (
    <div className="menu">
      <Link to={'/edit/' + id} className="edit">
        {editIcon}
      </Link>
      <div className="remove" onClick={() => props.handleDelete(id)}>
        {removeIcon}
      </div>
    </div>
  );

  return (
    <div className="todo">
      <div className="buttons">
        {completed ? checkedIcon : notCheckedIcon}
        {showMenu ? arrowUpIcon : arrowDownIcon}
      </div>
      <div className="info">
        <h3
          className={
            completed ? 'description completed' : 'description'
          }
        >
          {description}
        </h3>
        <div className="properties">
          <p
            className={
              completed
                ? 'category completed'
                : `category ${category.toLowerCase()}`
            }
          >
            {category}
          </p>
          <p className={completed ? 'hour completed' : 'hour'}>
            {hour}
          </p>
        </div>
      </div>
      <div className="menu">{showMenu ? menu : null}</div>
    </div>
  );
}
