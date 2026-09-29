
import "../assets/css/tienda.css"
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export function Tienda() {

    return (
        <>
            <Header />

            <main id="tienda">
                <div className="container">
                    <section id="encabezado-tienda">
                        <div className="hero-copy text-center my-4">
                            <h1>Encuentra <em>los mejores juegos</em> aquí.</h1>
                        </div>
                    </section>
                    <section id="catalogo">
                        <div className="row align-items-stretch my-4">
                            <div className="col-12 col-sm-6 col-md-4 d-flex">
                                <div className="card">
                                    <img
                                        src="zelda.jpg"
                                        className="card-img-top"
                                        alt="The Legend of Zelda: Twilight Princess"
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            The Legend of Zelda: Twilight Princess
                                        </h5>
                                        <h6 className="card-subtitle mb-2 text-body-secondary">
                                            $30.000
                                        </h6>
                                        <p className="card-text">
                                            Un oscuro mal se ha extendido sobre la tierra de Hyrule, así
                                            que un pequeño granjero llamado Link debe despertar el héroe
                                            que lleva dentro y salvar a su mundo de una destrucción
                                            segura.
                                        </p>
                                        <button className="btn btn-primary add-to-cart-btn" data-id="1">Agregar al carrito</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-4 d-flex">
                                <div className="card">
                                    <img
                                        src="silksong.avif"
                                        className="card-img-top"
                                        alt="Hollow Knight: Silksong"
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">Hollow Knight: Silksong</h5>
                                        <h6 className="card-subtitle mb-2 text-body-secondary">
                                            $11.000
                                        </h6>
                                        <p className="card-text">
                                            ¡Descubre un vasto reino embrujado en Hollow Knight:
                                            Silksong! Explora, lucha y sobrevive mientras asciendes a la
                                            cima de un vasto reino gobernado por la seda y el canto.
                                        </p>
                                        <button className="btn btn-primary add-to-cart-btn" data-id="2">Agregar al carrito</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-4 d-flex">
                                <div className="card">
                                    <img
                                        src="hades-2.jpeg"
                                        className="card-img-top"
                                        alt="Hades 2"
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">Hades 2</h5>
                                        <h6 className="card-subtitle mb-2 text-body-secondary">
                                            $16.000
                                        </h6>
                                        <p className="card-text">
                                            Usa las artes oscuras para abrirte paso más allá del
                                            inframundo y enfréntate al Titán del Tiempo en esta
                                            cautivadora continuación del galardonado juego de mazmorras
                                            de tipo rogue-like.
                                        </p>
                                        <button className="btn btn-primary add-to-cart-btn" data-id="3">Agregar al carrito</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>

            <aside id="contenido-carrito">
                <div className="offcanvas offcanvas-end" tabindex="-1" id="carrito" aria-labelledby="offcanvasRightLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasRightLabel">Tu carrito</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul id="items-carrito" className="list-group">
                            <li className="list-group-item">Tu carrito está vacío.</li>
                        </ul>
                        <a href="compra.html" className="btn btn-primary w-100 mt-4" type="button">Finalizar compra</a>
                    </div>
                </div>
            </aside>

            <div className="toast-container position-fixed bottom-0 end-0 p-3">
                <div id="toast-carrito" className="toast" role="alert" aria-live="assertive" aria-atomic="true">
                    <div className="toast-body d-flex flex-grow text-bg-primary">
                        Producto agregado al carrito.
                        <button type="button" className="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
                    </div>

                </div>
            </div>

            <Footer /> 
        </>
    );
}