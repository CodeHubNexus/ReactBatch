import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="logocontainer">
        <NavLink to={"/"}>Logo</NavLink>
      </div>
      <div className="navItems">
        <ul>
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/help"}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Help
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/search"}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Search
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/cart"}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Cart
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
