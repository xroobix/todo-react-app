import { useState } from 'react';
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';
import {
  BsCalendarEvent,
  BsCalendarWeek,
  BsCircleFill,
} from 'react-icons/bs';
import { VscInbox } from 'react-icons/vsc';
import { NavLink } from 'react-router-dom';
export default function SubMenu({ page, showSidebar }) {
  const [submenu, setSubmenu] = useState(false);

  const icons = [
    { name: 'Inbox', icon: <VscInbox size="1em" key={page.title} /> },
    {
      name: 'Today',
      icon: <BsCalendarEvent size="1em" key={page.title} />,
    },
    {
      name: 'Next 7 days',
      icon: <BsCalendarWeek size="1em" key={page.title} />,
    },
  ];

  function showSubmenu() {
    setSubmenu(!submenu);
  }

  const arrowUp = <AiOutlineUp size=".75em" />;

  const arrowDown = <AiOutlineDown size=".75em" />;

  const arrowMenu = (
    <div onClick={showSubmenu} className="icon">
      {submenu ? arrowUp : arrowDown}
    </div>
  );

  const displayIcon = icons.map(
    (i) => page.title === i.name && i.icon
  );

  const basicSubMenu = (
    <div className="page">
      <NavLink to={page.path} onClick={showSidebar} className="item">
        <div className="icon" key={page.id}>
          {displayIcon}
        </div>
        <span className="title">{page.title}</span>
      </NavLink>
    </div>
  );

  const dropdownSubMenu = (
    <>
      <div className="dropdown-page">
        <div className="menu">
          {arrowMenu}
          <span className="title">{page.title}</span>
        </div>
        <NavLink
          to={page.path}
          onClick={showSidebar}
          className="link"
        >
          <span className="see-all">See all</span>
        </NavLink>
      </div>
      <div className="submenu">
        {submenu &&
          page.subMenu.map((item, index) => (
            <div className="page" key={index}>
              <NavLink
                to={item.path}
                onClick={showSidebar}
                className="item"
              >
                <div className="icon">
                  <BsCircleFill
                    size=".75em"
                    className={item.title.toLowerCase()}
                    fill={item.color}
                  />
                </div>
                <span className="title">{item.title}</span>
              </NavLink>
            </div>
          ))}
      </div>
    </>
  );

  return page.subMenu ? dropdownSubMenu : basicSubMenu;
}
