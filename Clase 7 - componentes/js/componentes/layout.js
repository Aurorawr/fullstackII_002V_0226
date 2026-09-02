
class Footer  extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer>
                <h4>Footer</h4>
            </footer>
        `
    }
}

class Navbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <nav>
                <ul>
                    <li><a href="index.html">Inicio</a></li>
                    <li><a href="inicio-sesion.html">Iniciar sesión</a></li>
                    <li><a href="registro.html">Registro</a></li>
                    <li><a href="contacto.html">Contacto</a></li>
                </ul>
            </nav>
        `
    }
}

customElements.define('custom-navbar', Navbar)
customElements.define('custom-footer', Footer)