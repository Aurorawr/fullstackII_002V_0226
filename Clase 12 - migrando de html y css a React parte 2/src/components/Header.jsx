import { NavLink } from "react-router";

export const Header = () => {

    return (
        <header className="site-header">
        <div className="container-xl">
          <nav className="navbar navbar-expand-lg navbar-dark px-0">
            <a className="brand" href="index.html" aria-label="Nexus Games inicio"
              ><span className="brand-mark">E</span><span>ESTIM</span></a
            >
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#mainNav"
              aria-label="Abrir menú"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="mainNav">
              <ul className="navbar-nav mx-auto gap-lg-4">
                <li className="nav-item">
                  <NavLink className="nav-link ${activePage === 'inicio' ? 'active' : ''}" to="/">Inicio</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link ${activePage === 'tienda' ? 'active' : ''}" to="/tienda">Tienda</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link ${activePage === 'soporte' ? 'active' : ''}" to="/test">Soporte</NavLink>
                </li>
              </ul>
              <div className="d-flex align-items-center gap-3 nav-actions">
                <a className="profile-button" href="iniciar-sesion.html" aria-label="Abrir perfil">
                  <span className="d-none d-xl-inline">Iniciar sesión</span>
                </a>
                <a className="profile-button" href="registro.html" aria-label="Abrir perfil">
                  <span className="d-none d-xl-inline">Registrarse</span>
                </a>
                <button
                  id="cart-button"
                  className="btn btn-outline-primary position-relative"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#carrito"
                  aria-controls="carrito"
                >
                  <i className="bi bi-cart-fill"></i>
                  <span
                    className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                  >
                    0
                  </span>
                </button>
              </div>
            </div>
          </nav>
        </div>
      </header>
    );
}
