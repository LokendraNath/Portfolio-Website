const Header = () => {
  return (
    <header className="header">
      <a href="#" className="logo">
        <span>Lokendra Nath</span>
      </a>
      <ul className="nav-links">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skill">Skills</a>
        </li>
        <li>
          <a href="#project">Project</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <i className="fa-solid fa-bars" id="menu-icon"></i>
      <button className="visit-btn">
        <a href="https://github.com/LokendraNath" target="_blank">
          GitHub
        </a>
      </button>
    </header>
  );
};
export default Header;
