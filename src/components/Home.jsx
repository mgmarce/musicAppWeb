import React from 'react';
import Styles from '../styles/Home.module.css';
import img1 from '../img/artista1.jpg'
import img2 from '../img/artista2.jpeg'
import img3 from '../img/artista5.jpg'
import img4 from '../img/artista4.jpeg'
import img5 from '../img/artista3.jpeg'
import img6 from '../img/artista11.jpeg'
import img7 from '../img/artista7.png'
import img8 from '../img/artista6.jpeg'
import img9 from '../img/artista8.jpeg'
import vid1 from '../img/video1.jpeg'
import vid2 from '../img/video2.jpeg'
import vid3 from '../img/video3.jpeg'
import song1 from '../img/cancion1.png'
import song2 from '../img/cancion2.png'
import song3 from '../img/cancion3.png'
import song4 from '../img/cancion4.png'
import song5 from '../img/cancion5.png'
import song6 from '../img/cancion6.png'



const imgData = [
    {
      src: img1,
      alt: 'Artista 1',
      shadow: 'rgba(148, 163, 174, 0.837) 0 8px 16px'
    },
    {
      src: img2,
      alt: 'Artista 2',
      shadow: 'rgba(166, 192, 219, 0.837) 0 8px 16px'
    },
    {
      src: img3,
      alt: 'Artista 3',
      shadow: 'rgba(168, 73, 75, 0.636) 0 8px 16px'
    },
    {
      src: img4,
      alt: 'Artista 4',
      shadow: 'rgba(178, 210, 255, 0.936) 0 8px 16px'
    },
    {
      src: img5,
      alt: 'Artista 5',
      shadow: 'rgba(154, 154, 154, 0.936) 0 8px 16px'
    },
    ,
    {
      src: img6,
      alt: 'Artista 6',
      shadow: 'rgba(249, 209, 135, 0.725) 0 8px 16px'
    },
    ,
    {
      src: img7,
      alt: 'Artista 7',
      shadow: 'rgba(135, 211, 249, 0.725) 0 8px 16px'
    },
    {
      src: img8,
      alt: 'Artista 8',
      shadow: 'rgba(223, 96, 208, 0.636) 0 8px 16px'
    },
    {
      src: img9,
      alt: 'Artista 9',
      shadow: 'rgba(246, 216, 161, 0.725) 0 8px 16px'
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
        <section className="container-fluid">
          <div className="row">
            <div className={`${Styles.div_col_left} col-md-3 col-6 `}>
              <div className={`${Styles.box}`}>
                  <div className={`${Styles.mini_box} ${Styles.box_color1}`}>
                    <i className="bi bi-music-note-beamed"></i>
                  </div>
                  <span>Mi musica</span>
              </div>
            </div>
            <div className="col-md-3 col-6 ">
              <div className={`${Styles.box}`}>
                  <div className={`${Styles.mini_box} ${Styles.box_color2}`}>
                    <i className="bi bi-repeat"></i>
                  </div>
                  <span>En repetición</span>
              </div>
            </div>
            <div className="col-md-3 col-6 pb-2">
              <div className={`${Styles.box}`}>
                  <div className={`${Styles.mini_box} ${Styles.box_color3}`}>
                    <i className="bi bi-trophy"></i>
                  </div>
                  <span>Top 10 Global</span>
              </div>
            </div>
            <div className={`${Styles.div_col_right} col-md-3 col-6 `}>
              <div className={`${Styles.box}`}>
                  <div className={`${Styles.mini_box} ${Styles.box_color4}`}>
                    <i className="bi bi-disc"></i>
                  </div>
                  {/*  <img src={img8} alt="Imagen" /> */}
                  <span>Según tus gustos</span>
              </div>
            </div>
          </div>
        </section>
        <section className="container-fluid pb-2">
          <div className="row">
            <div className={`${Styles.div_col_left} col-md-4 col-12`}>
              <p>Vídeos recientes</p>
              <div className={`${Styles.row_videos} row`}>
                <div className={`${Styles.video_container} col-12`}>
                  <img src={vid1} alt="" />
                  <div className={Styles.circle_icon}>
                    <i className="bi bi-play-fill"></i>
                  </div>
                  {/* <i className="bi bi-play-fill"></i> */}
                </div>
                <div className={`${Styles.video_container} col-12 mt-2`}>
                  <img src={vid2} alt="" />
                  <div className={Styles.circle_icon}>
                    <i className="bi bi-play-fill"></i>
                  </div>
                </div>
                <div className={`${Styles.video_container} col-12 mt-2`}>
                  <img src={vid3} alt="" />
                  <div className={Styles.circle_icon}>
                    <i className="bi bi-play-fill"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className={`${Styles.div_col_right} col-md-8 col-12`}>
              <p>Canciones recientes</p>
              <div className="col-12">
                <div className={Styles.song_box}>
                  <i className={`${Styles.song_icon} bi bi-play-fill `}></i>
                  <img src={song1} alt="Disco" className={Styles.song_img}/>
                  <div className={Styles.song_info}>
                    <p className={Styles.song_title}>Black Swan</p>
                    <p className={Styles.song_artist}>BTS</p>
                  </div>
                  <span className={Styles.song_duration}>3:45</span>
                  <i className={`${Styles.heart_icon} bi bi-heart`}></i>
                </div>
              </div>
              <div className="col-12">
                <div className={Styles.song_box}>
                  <i className={`${Styles.song_icon} bi bi-play-fill `}></i>
                  <img src={song2} alt="Disco" className={Styles.song_img}/>
                  <div className={Styles.song_info}>
                    <p className={Styles.song_title}>Ricochet</p>
                    <p className={Styles.song_artist}>Chase Atlantic</p>
                  </div>
                  <span className={Styles.song_duration}>2:50</span>
                  <i className={`${Styles.heart_icon} bi bi-heart`}></i>
                </div>
              </div>
              <div className="col-12">
                <div className={Styles.song_box}>
                  <i className={`${Styles.song_icon} bi bi-play-fill `}></i>
                  <img src={song3} alt="Disco" className={Styles.song_img}/>
                  <div className={Styles.song_info}>
                    <p className={Styles.song_title}>Love Me Again</p>
                    <p className={Styles.song_artist}>V</p>
                  </div>
                  <span className={Styles.song_duration}>3:25</span>
                  <i className={`${Styles.heart_icon} bi bi-heart`}></i>
                </div>
              </div>
              <div className="col-12">
                <div className={Styles.song_box}>
                  <i className={`${Styles.song_icon} bi bi-play-fill `}></i>
                  <img src={song4} alt="Disco" className={Styles.song_img}/>
                  <div className={Styles.song_info}>
                    <p className={Styles.song_title}>Blank Space</p>
                    <p className={Styles.song_artist}>Taylor Swift</p>
                  </div>
                  <span className={Styles.song_duration}>4:05</span>
                  <i className={`${Styles.heart_icon} bi bi-heart`}></i>
                </div>
              </div>
              <div className="col-12">
                <div className={Styles.song_box}>
                  <i className={`${Styles.song_icon} bi bi-play-fill `}></i>
                  <img src={song5} alt="Disco" className={Styles.song_img}/>
                  <div className={Styles.song_info}>
                    <p className={Styles.song_title}>The Astronaut</p>
                    <p className={Styles.song_artist}>Jin</p>
                  </div>
                  <span className={Styles.song_duration}>2:27</span>
                  <i className={`${Styles.heart_icon} bi bi-heart`}></i>
                </div>
              </div>
              <div className="col-12">
                <div className={Styles.song_box}>
                  <i className={`${Styles.song_icon} bi bi-play-fill `}></i>
                  <img src={song6} alt="Disco" className={Styles.song_img}/>
                  <div className={Styles.song_info}>
                    <p className={Styles.song_title}>TOO LATE</p>
                    <p className={Styles.song_artist}>Chase Atlantic</p>
                  </div>
                  <span className={Styles.song_duration}>2:57</span>
                  <i className={`${Styles.heart_icon} bi bi-heart`}></i>
                </div>
              </div>
            </div>
          </div>
        </section>
        </>
    );
};

export default Home;
