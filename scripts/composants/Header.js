// Composant Header
function Header() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="/index.html">
            <img src="/media/cepi.png" alt="logo" width="100" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="/cachée.html">Ajouter post</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Menu2</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Menu3</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Menu4</a>
              </li>
            </ul>
            <a href="#" className="btn btn-outline-secondary ms-3">
              <img src="./media/profile.png" alt="user" width="30" />
            </a>
          </div>
        </div>
      </nav>
    );
  }
  