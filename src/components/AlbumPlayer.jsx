import React from 'react';

const AlbumPlayer = ({ album, onScrollLeft, onScrollRight, index, albumsLength }) => {
    return (
        <footer className="footer-container d-flex justify-content-center">
            <button className={`scroll-left ${index === 0 ? 'hide-arrow' : ''}`} onClick={onScrollLeft}>
                <i className="bi bi-skip-start-fill fs-3"></i>
            </button>
            <iframe className="spotify-widget" style={{ borderRadius: '12px' }} src={album.spotify} width="90%"
                frameBorder="0" allowFullScreen loading="lazy"></iframe>
            <button className={`scroll-right ${index === albumsLength - 1 ? 'hide-arrow' : ''}`} onClick={onScrollRight}>
                <i className="bi bi-skip-end-fill fs-3"></i>
            </button>
        </footer>
    );
};

export default AlbumPlayer;
