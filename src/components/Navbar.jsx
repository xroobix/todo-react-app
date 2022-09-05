import { AiFillCarryOut } from 'react-icons/ai';

export default function Navbar() {
  const logoIcon = (
    <AiFillCarryOut className="icon" size="2.5em" fill="#3ABFF8" />
  );

  return (
    <div className="navbar">
      <div className="logo">
        <h1 className="title">ToDo App</h1>
        {logoIcon}
      </div>
    </div>
  );
}
