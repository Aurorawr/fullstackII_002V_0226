import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

import "./inicio.css"

export const Inicio = () => {

    return (
        <>
            <Header />

            <main id="inicio">
                <div className="container">
                    <section className="hero-section">
                        <div className="hero-copy text-center">
                            <h1>Encuentra <em>los mejores juegos</em> aquí.</h1>
                        </div>
                        <div id="carouselGamesCaptions" className="carousel slide m-4" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button
                                    type="button"
                                    data-bs-target="#carouselGamesCaptions"
                                    data-bs-slide-to="0"
                                    className="active"
                                    aria-current="true"
                                    aria-label="Slide 1"
                                ></button>
                                <button
                                    type="button"
                                    data-bs-target="#carouselGamesCaptions"
                                    data-bs-slide-to="1"
                                    aria-label="Slide 2"
                                ></button>
                                <button
                                    type="button"
                                    data-bs-target="#carouselGamesCaptions"
                                    data-bs-slide-to="2"
                                    aria-label="Slide 3"
                                ></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img
                                        src="zelda.jpg"
                                        className="d-block w-100"
                                        alt="The Legend of Zelda: Twilight Princess"
                                    />
                                </div>
                                <div className="carousel-item">
                                    <img
                                        src="hades-2.jpeg"
                                        className="d-block w-100"
                                        alt="Hades 2"
                                    />
                                </div>
                                <div className="carousel-item">
                                    <img
                                        src="silksong.avif"
                                        className="d-block w-100"
                                        alt="Silksong"
                                    />
                                </div>
                            </div>
                            <button
                                className="carousel-control-prev"
                                type="button"
                                data-bs-target="#carouselGamesCaptions"
                                data-bs-slide="prev"
                            >
                                <span
                                    className="carousel-control-prev-icon"
                                    aria-hidden="true"
                                ></span>
                                <span className="visually-hidden">Anterior</span>
                            </button>
                            <button
                                className="carousel-control-next"
                                type="button"
                                data-bs-target="#carouselGamesCaptions"
                                data-bs-slide="next"
                            >
                                <span
                                    className="carousel-control-next-icon"
                                    aria-hidden="true"
                                ></span>
                                <span className="visually-hidden">Siguiente</span>
                            </button>
                        </div>
                        <div className="text-center">
                            <a className="btn btn-primary btn-lg" href="tienda.html"
                            >Explorar tienda</a
                            >
                        </div>
                    </section>

                    <section id="destacados">
                        <div className="container-xl">
                            <div className="section-heading">
                                <div>
                                    <p className="eyebrow">Siempre disponibles</p>
                                    <h2>Envíanos un <span>mensaje</span></h2>
                                    <p>
                                        ¿Dudas respecto a nuestros productos? ¿Algo salió mal usando
                                        nuestra plataforma? Dinos. Estamos disponibles para ayudarte.
                                    </p>
                                </div>
                                <span
                                ><a className="text-link me-1" href="#catalogo">Contáctanos</a
                                ><i className="bi bi-envelope-heart-fill"></i
                                ></span>
                            </div>
                        </div>
                    </section>
                </div>
            </main>

            <Footer />
        </>
    );
}
