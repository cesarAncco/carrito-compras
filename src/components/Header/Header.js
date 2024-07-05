/* eslint-disable jsx-a11y/anchor-is-valid */
const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <a className="navbar-brand text-white">
          <i className="bi bi-laptop"></i>
          Mundo Laptop
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <button className="nav-link text-white">Catálogo</button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
