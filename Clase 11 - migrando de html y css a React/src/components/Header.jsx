import { NavLink } from "react-router";

export const Header = () => {

    return (
        <header class="site-header">
        <div class="container-xl">
          <nav class="navbar navbar-expand-lg navbar-dark px-0">
            <a class="brand" href="index.html" aria-label="Nexus Games inicio"
              ><span class="brand-mark">E</span><span>ESTIM</span></a
            >
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#mainNav"
              aria-label="Abrir menú"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="mainNav">
              <ul class="navbar-nav mx-auto gap-lg-4">
                <li class="nav-item">
                  <a class="nav-link ${activePage === 'inicio' ? 'active' : ''}" href="index.html">Inicio</a>
                </li>
                <li class="nav-item">
                  <NavLink class="nav-link ${activePage === 'tienda' ? 'active' : ''}" to="/test-app">Tienda</NavLink>
                </li>
                <li class="nav-item">
                  <NavLink class="nav-link ${activePage === 'soporte' ? 'active' : ''}" to="/test">Soporte</NavLink>
                </li>
              </ul>
              <div class="d-flex align-items-center gap-3 nav-actions">
                <a class="profile-button" href="iniciar-sesion.html" aria-label="Abrir perfil">
                  <span class="d-none d-xl-inline">Iniciar sesión</span>
                </a>
                <a class="profile-button" href="registro.html" aria-label="Abrir perfil">
                  <span class="d-none d-xl-inline">Registrarse</span>
                </a>
                <button
                  id="cart-button"
                  class="btn btn-outline-primary position-relative"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#carrito"
                  aria-controls="carrito"
                >
                  <i class="bi bi-cart-fill"></i>
                  <span
                    class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
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
