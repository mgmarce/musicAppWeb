import React, { useEffect, useRef } from "react";
import Styles from '../styles/Sidebar.module.css'

const Sidebar = () => {
    const logoRef = useRef(null);
    const barraLateralRef = useRef(null);
    const spansRef = useRef([]);
    const menuRef = useRef(null);
    const mainRef = useRef(null);

    useEffect(() => {
        const logo = logoRef.current;
        const barraLateral = barraLateralRef.current;
        const spans = spansRef.current;
        const menu = menuRef.current;
        //const main = mainRef.current;

        const handleMenuClick = () => {
            barraLateral.classList.toggle(Styles.max_barra_lateral);
            if (barraLateral.classList.contains(Styles.max_barra_lateral)) {
                menu.children[0].style.display = "none";
                menu.children[1].style.display = "block";
            } else {
                menu.children[0].style.display = "block";
                menu.children[1].style.display = "none";
            }
            if (window.innerWidth <= 320) {
                barraLateral.classList.add(Styles.mini_barra_lateral);
                //main.classList.add(Styles.min_main);
                spans.forEach((span) => {
                    span.classList.add(Styles.oculto);
                });
            }
        };

        const handleLogoClick = () => {
            barraLateral.classList.toggle(Styles.mini_barra_lateral);
            //main.classList.toggle(Styles.min_main);
            spans.forEach((span) => {
                span.classList.toggle(Styles.oculto);
            });
        };

        menu.addEventListener("click", handleMenuClick);
        logo.addEventListener("click", handleLogoClick);

        return () => {
            menu.removeEventListener("click", handleMenuClick);
            logo.removeEventListener("click", handleLogoClick);
        };
    }, []); // La dependencia vacía asegura que esto se ejecute solo una vez al montar el componente

    return (
        <>
        <aside className={Styles.barra_lateral} ref={barraLateralRef}>
            <div>
                <div className={Styles.nombre_pagina}>
                    <img className={Styles.logo} src="img/logo.png" alt="" id="logo" ref={logoRef} />
                    <span className={Styles.info} ref={(el) => (spansRef.current[0] = el)}>K<span className={Styles.dot}>•</span>Music</span>
                </div>
                <button className={Styles.boton} ref={menuRef}>
                    <span className={Styles.info} ref={(el) => (spansRef.current[1] = el)}>Create new</span>
                </button>
            </div>

            <nav className={Styles.navegacion}>
                <ul>
                    <span className={Styles.info} ref={(el) => (spansRef.current[2] = el)}>Explorar</span>
                    <li>
                        <a id="inbox" href="#">
                            <i className="bi bi-star"></i>
                            <span>Para ti</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="bi bi-folder2-open"></i>
                            <span>Biblioteca</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="bi bi-boombox"></i>
                            <span>Radio</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="bi bi-file-earmark-play"></i>
                            <span>Videos Musicales</span>
                        </a>
                    </li>
                    <span className={Styles.info} ref={(el) => (spansRef.current[3] = el)}>Biblioteca personal</span>
                    <li>
                        <a href="#">
                            <i className="bi bi-suit-heart"></i>
                            <span>Favoritos</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="bi bi-music-note-beamed"></i>
                            <span>Artistas</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="bi bi-music-note-list"></i>
                            <span>Álbumes</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="bi bi-clock-history"></i>
                            <span>Recientes</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="bi bi-mic"></i>
                            <span>Podcasts</span>
                        </a>
                    </li>
                    <span className={Styles.info} ref={(el) => (spansRef.current[4] = el)}>Recomendaciones</span>
                    <li>
                        <a href="#">
                            <i className="bi bi-music-note"></i>
                            <span>K-pop</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="bi bi-music-note"></i>
                            <span>Jazz</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="bi bi-music-note"></i>
                            <span>De época</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </aside>
        <footer className={[Styles.footer_container, 'd-flex', 'justify-content-center'].join(' ')}>
            <i className="bi bi-skip-start-fill fs-3 scroll-left"></i>
            <iframe className="spotify_widget" style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/track/6wH3AP7b01vpzKYRJhreMy?utm_source=generator&theme=0" width="90%"
                frameborder="0" loading="lazy"></iframe>
            <i className="bi bi-skip-end-fill fs-3 scroll-right"></i>
        </footer>
        </>
        
    );
};


export default Sidebar;
//C:\xampp\htdocs\Bootcamp\music_app_web\src\styles