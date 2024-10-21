import React, { useState } from 'react';
import AlbumPlayer from './AlbumPlayer';

const MainContent = () => {
    const [index, setIndex] = useState(0);

    const albums = [
        { spotify: "https://open.spotify.com/embed/track/6wH3AP7b01vpzKYRJhreMy?utm_source=generator&theme=0" },
        { spotify: "https://open.spotify.com/embed/track/2T04xX1PyMkyPFKBYnlVl1?utm_source=generator&theme=0" },
        { spotify: "https://open.spotify.com/embed/track/5fj32MKLHkut2Vod1UodcU?utm_source=generator&theme=0" },
        { spotify: "https://open.spotify.com/embed/track/7kud2YsUIgEO6L41B98Cih?utm_source=generator&theme=0" },
        { spotify: "https://open.spotify.com/embed/track/1p80LdxRV74UKvL8gnD7ky?utm_source=generator&theme=0" },
        { spotify: "https://open.spotify.com/embed/track/4m0q0xQ2BNl9SCAGKyfiGZ?utm_source=generator&theme=0" },
        { spotify: "https://open.spotify.com/embed/track/0sf12qNH5qcw8qpgymFOqD?utm_source=generator&theme=0" },
    ];

    const handleClickScroll = (val) => {
        if (index + val >= 0 && index + val < albums.length) {
            setIndex(index + val);
        }
    };

    return (
        <main>
            <div className="lanzamientos">
                <div className="row">
                    {albums.map((album, i) => (
                        <div className="col" key={i}>
                            <img src={`img/artista${i + 1}.jpeg`} alt={`Artista ${i + 1}`} width="150px" />
                        </div>
                    ))}
                </div>
            </div>
            <AlbumPlayer 
                album={albums[index]}
                onScrollLeft={() => handleClickScroll(-1)}
                onScrollRight={() => handleClickScroll(1)}
                index={index}
                albumsLength={albums.length}
            />
        </main>
    );
};

export default MainContent;
