/* eslint-disable jsx-a11y/anchor-is-valid */
const Header = () => {
  return (
    <header>
      <nav class="navbar navbar-expand-lg navbar-light bg-dark">
        <a class="navbar-brand text-white">
          <i class="bi bi-laptop"></i>
          Mundo Laptop
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <button class="nav-link text-white">Catálogo</button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
