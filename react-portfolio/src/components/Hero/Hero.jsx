import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Adrian</h1>
            <p className={styles.description}>I'm a electrical and electronic student who is interested in web development and RTL design(semiconductor). Reach out if you'd like to learn more</p>
            <a href="mailto:adrian.wee00@gmail.com" className={styles.contactBtn}>Contact me</a>
        </div>
        <img src={getImageUrl("hero/Adrian-centered.JPG")} alt="Hero image of me" className={styles.heroImg}/>
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>
    </section>
  )
}
