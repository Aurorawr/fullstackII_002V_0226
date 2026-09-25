import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

import "./inicio.css"

export const Inicio = () => {

    return (
        <>
            <Header />

            <main id="inicio">
                <div class="container">
                    <section class="hero-section">
                        <div class="hero-copy text-center">
                            <h1>Encuentra <em>los mejores juegos</em> aquí.</h1>
                        </div>
                        <div id="carouselGamesCaptions" class="carousel slide m-4" data-bs-ride="carousel">
                            <div class="carousel-indicators">
                                <button
                                    type="button"
                                    data-bs-target="#carouselGamesCaptions"
                                    data-bs-slide-to="0"
                                    class="active"
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
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img
                                        src="zelda.jpg"
                                        class="d-block w-100"
                                        alt="The Legend of Zelda: Twilight Princess"
                                    />
                                </div>
                                <div class="carousel-item">
                                    <img
                                        src="hades-2.jpeg"
                                        class="d-block w-100"
                                        alt="Hades 2"
                                    />
                                </div>
                                <div class="carousel-item">
                                    <img
                                        src="silksong.avif"
                                        class="d-block w-100"
                                        alt="Silksong"
                                    />
                                </div>
                            </div>
                            <button
                                class="carousel-control-prev"
                                type="button"
                                data-bs-target="#carouselGamesCaptions"
                                data-bs-slide="prev"
                            >
                                <span
                                    class="carousel-control-prev-icon"
                                    aria-hidden="true"
                                ></span>
                                <span class="visually-hidden">Anterior</span>
                            </button>
                            <button
                                class="carousel-control-next"
                                type="button"
                                data-bs-target="#carouselGamesCaptions"
                                data-bs-slide="next"
                            >
                                <span
                                    class="carousel-control-next-icon"
                                    aria-hidden="true"
                                ></span>
                                <span class="visually-hidden">Siguiente</span>
                            </button>
                        </div>
                        <div class="text-center">
                            <a class="btn btn-primary btn-lg" href="tienda.html"
                            >Explorar tienda</a
                            >
                        </div>
                    </section>

                    <section id="destacados">
                        <div class="container-xl">
                            <div class="section-heading">
                                <div>
                                    <p class="eyebrow">Siempre disponibles</p>
                                    <h2>Envíanos un <span>mensaje</span></h2>
                                    <p>
                                        ¿Dudas respecto a nuestros productos? ¿Algo salió mal usando
                                        nuestra plataforma? Dinos. Estamos disponibles para ayudarte.
                                    </p>
                                </div>
                                <span
                                ><a class="text-link me-1" href="#catalogo">Contáctanos</a
                                ><i class="bi bi-envelope-heart-fill"></i
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
