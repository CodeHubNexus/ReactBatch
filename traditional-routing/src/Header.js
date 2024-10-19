import { Link } from "react-router-dom";
const Header = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/help">Help</Link>
    </nav>
  );
};

export default Header;
