import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header className="header">
      <a className="logo" href="#">
        Pizza Day
      </a>
      <nav className="Header__nav">
        <NavLink className="Header__link" to="/menu">menu</NavLink>
        <NavLink className="Header__link" to="/">login</NavLink>
      </nav>
    </header>
  );
};

export default Header;
