import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';

const Page = () => {
  return (
    <div className={styles.main_screen}>
      <Image
        src="/background2.png"
        alt="Background Image"
        layout="fill" // Crucial for making it the size of the parent
        objectFit="cover" // How the image should fill the parent
        className={styles.backgroundImage}
      />
      <div className={styles.menu}>

        {/* logo */}
        <div className={styles.logo_div}>
          <Image
            className={styles.logo_img}
            src="/logo.png"
            alt="Background Image"
            width={100}
            height={100}
          />
        </div>

        {/* this is inner menu */}
        <div className={styles.inner_menu}>
          <ul className={styles.nav_bar}>
            <li>Home</li>
            <li>About</li>
            <li>Features</li>
            <li>Media</li>
            <li>Contact</li>
          </ul>
          <button className={styles.btn}>
            <strong className={styles.btn_strong}>PLAY NOW</strong>
            <div className={styles.container_stars}>
              <div className={styles.stars}></div>
            </div>

            <div className={styles.glow}>
              <div className={styles.circle}></div>
              <div className={styles.circle}></div>
            </div>
          </button>
        </div>
      </div>

      <div className={styles.middle}>
        <Image
          className={styles.ludo_img}
          src="/ludo_img.png"
          alt="ludo Image"
          layout="fill" // This makes the image size to its parent
          objectFit="contain" // Or 'cover', 'stretch', etc., depending on how you want it to fit
        />
        <button className={styles.start_game}>start game</button>
      </div>

      <div className={styles.games}>
        <div className={styles.heading}>
          <h1 className={styles.text}>#1 game on
            google play
            & app store
          </h1>
        </div>

        <div className={styles.all_games_button}>
        <button className={styles.play_button1}>
        <Image
          width={150}
          height={100}
          src="/button1.png"
          alt="button img"
          
           // Or 'cover', 'stretch', etc., depending on how you want it to fit
        />
        </button>
        <button className={styles.play_button2}>button2</button>
        <button className={styles.play_button3}>button3</button>
        <button className={styles.play_button4}>button4</button>
        </div>
      </div>
    </div>
  );
};

export default Page;
