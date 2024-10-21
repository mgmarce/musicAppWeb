import React from 'react';
import Styles from '../styles/Home.module.css';
//import img1 from '../../public/img/artista1.jpg'


const imgData = [
    {
      src: '../../public/img/artista1.jpg',
      alt: 'Artista 1',
      shadow: 'rgba(148, 163, 174, 0.837) 0 8px 16px'
    },
    {
      src: '../../public/img/artista2.jpeg',
      alt: 'Artista 2',
      shadow: 'rgba(166, 192, 219, 0.837) 0 8px 16px'
    },
    {
      src: '../../public/img/artista5.jpg',
      alt: 'Artista 3',
      shadow: 'rgba(168, 73, 75, 0.636) 0 8px 16px'
    },
    {
      src: '../../public/img/artista4.jpeg',
      alt: 'Artista 4',
      shadow: 'rgba(178, 210, 255, 0.936) 0 8px 16px'
    },
    {
      src: '../../public/img/artista3.jpeg',
      alt: 'Artista 5',
      shadow: 'rgba(154, 154, 154, 0.936) 0 8px 16px'
    },
    ,
    {
      src: '../../public/img/artista11.jpeg',
      alt: 'Artista 6',
      shadow: 'rgba(249, 209, 135, 0.725) 0 8px 16px'
    },
    ,
    {
      src: '../../public/img/artista7.png',
      alt: 'Artista 7',
      shadow: 'rgba(135, 211, 249, 0.725) 0 8px 16px'
    },
    {
      src: '../../public/img/artista8.jpeg',
      alt: 'Artista 8',
      shadow: 'rgba(255, 228, 179, 0.725) 0 8px 16px'
    }
  ];

const Home = () => {
   
    return (
        <>
        <section className={Styles.carousel_container}>
            <div className={Styles.slider}>
                {imgData.concat(imgData).map((image, i) => (
                <div className={Styles.slide} key={i}>
                    <img 
                        src={image.src} 
                        alt={image.alt} 
                        style={{boxShadow: image.shadow}}
                    />
                </div>
                ))}
            </div>
        </section>
        <section className={Styles.carousel_container}>
            
        </section>
        <section className={Styles.carousel_container}>
            
        </section>
        </>
    );
};

export default Home;
