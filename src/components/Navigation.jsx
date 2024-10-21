import React, { useEffect, useRef, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import Styles from '../styles/Navigation.module.css';
import logoImg from '../img/logo.png'
import Home from './Home';
import Login from './Login';
import Explore from './Explore';

const Navigation = () => {
    const [index, setIndex] = useState(0); 

    const albums = [
        {spotify: "https://open.spotify.com/embed/track/6wH3AP7b01vpzKYRJhreMy?utm_source=generator&theme=0" },
        { spotify: "https://open.spotify.com/embed/track/2T04xX1PyMkyPFKBYnlVl1?utm_source=generator&theme=0" },
        { spotify: "https://open.spotify.com/embed/track/5fj32MKLHkut2Vod1UodcU?utm_source=generator&theme=0" },
        { spotify: "https://open.spotify.com/embed/track/7kud2YsUIgEO6L41B98Cih?utm_source=generator&theme=0" },
        { spotify: "https://open.spotify.com/embed/track/1p80LdxRV74UKvL8gnD7ky?utm_source=generator&theme=0" },
        { spotify: "https://open.spotify.com/embed/track/4m0q0xQ2BNl9SCAGKyfiGZ?utm_source=generator&theme=0" },
        { spotify: "https://open.spotify.com/embed/track/0sf12qNH5qcw8qpgymFOqD?utm_source=generator&theme=0" }
    ];

    const handleClickScroll = (val) => {
        if (index + val >= 0 && index + val < albums.length) {
        setIndex(index + val); 
        }
    };

    const handleKeyScroll = (e) => {
        if (e.key === "ArrowLeft") {
        handleClickScroll(-1);
        }
        if (e.key === "ArrowRight") {
        handleClickScroll(1);
        }
    };

    const updateDisplay = (index) => {
        return albums[index].spotify;
    };


      //*********************************************** */

    const logoRef = useRef(null);
    const barraLateralRef = useRef(null);
    const spansRef = useRef([]);
    const menuRef = useRef(null);
    const mainRef = useRef(null);
    const footerRef = useRef(null);

    useEffect(() => {
        const logo = logoRef.current;
        const barraLateral = barraLateralRef.current;
        const spans = spansRef.current;
        const menu = menuRef.current;
        const main = mainRef.current;

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
                main.classList.add(Styles.min_main);
                spans.forEach((span) => {
                    span.classList.add(Styles.oculto);
                });
            }
        };

        const handleLogoClick = () => {
            barraLateral.classList.toggle(Styles.mini_barra_lateral);
            main.classList.toggle(Styles.min_main);
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
    }, []);

    const location = useLocation();
    useEffect(() => {
        //footerRef
        const barraLateral = barraLateralRef.current;
        const main = mainRef.current;
        const footer = footerRef.current;
        if (location.pathname === '/login') {
            barraLateral.classList.add(Styles.sidebar_ocultar);
            main.classList.add(Styles.login_main);
            footer.classList.add(Styles.login_footer);
        } else {
            barraLateral.classList.remove(Styles.sidebar_ocultar);
            main.classList.remove(Styles.login_main);
            footer.classList.remove(Styles.login_footer);
        }
    }, [location.pathname]);

    return (
        <>
        <aside className={Styles.barra_lateral} ref={barraLateralRef}>
            <div>
                <div className={Styles.nombre_pagina}>
                    <img className={Styles.logo} src={logoImg} alt="" id="logo" ref={logoRef} />
                    <span className={Styles.info} ref={(el) => (spansRef.current[0] = el)}>K<span className={Styles.dot}>•</span>Music</span>
                </div>
                <Link to="/login" className={Styles.boton}>
                    <i className="bi bi-box-arrow-in-right"></i>
                    <span className={Styles.info} ref={(el) => (spansRef.current[1] = el)}>Iniciar sesión</span>
                </Link>
            </div>

            <nav className={Styles.navegacion}>
                <ul>
                    <span className={Styles.info} ref={(el) => (spansRef.current[2] = el)}>Explorar</span>
                    <li>
                        <Link to="/"> {/* lleva el id="inbox" */}
                            <i className="bi bi-star"></i>
                            <span>Para ti</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/explore">
                            <i className="bi bi-folder2-open"></i>
                            <span>Biblioteca</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <i className="bi bi-boombox"></i>
                            <span>Radio</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <i className="bi bi-file-earmark-play"></i>
                            <span>Videos Musicales</span>
                        </Link>
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
        <main ref={mainRef}>
            <nav className="navbar bg-body-tertiary ">
                <div className={Styles.menu} ref={menuRef}>
                    <i className="bi bi-list"></i>
                    <i className="bi bi-x"></i>
                </div>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/explore" element={<Explore />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </main>

        <footer ref={footerRef} className={`${Styles.footer_container} d-flex justify-content-center align-items-center`}>
            <i className={`bi bi-skip-start-fill ${index === 0 ? Styles.hide_arrow : ''}`} onClick={() => handleClickScroll(-1)}></i>
            <iframe id="spotify_widget" style={{ borderRadius: '12px', width: '90%', height: '80px', margin: '0', padding: '0' }} src={updateDisplay(index)} allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" ></iframe>
            <i className={`bi bi-skip-end-fill ${index === albums.length - 1 ? Styles.hide_arrow : ''}`} onClick={() => handleClickScroll(1)}></i>
        </footer>

        </>
    );
};


export default Navigation;