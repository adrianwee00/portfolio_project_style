import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './About.module.css'

export const About = () => {
  return (
    <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
        <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
                <img src = {getImageUrl("about/cursorIcon.png")} alt="Cursor Icon"/>
                <div className={styles.aboutItemText}>
                <h3>JPA(Malaysian Government) scholar</h3>
                <p>Selected from hundreds of students to receive a scholarship from the malaysian government. Currently studying in Kyutech(CGPA 3.91)</p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <img src = {getImageUrl("about/serverIcon.png")} alt="Server Icon"/>
                <div className={styles.aboutItemText}>
                <h3>Web development</h3>
                <p>Self learned about web development through platforms like Udemy and YouTube.</p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <img src = {getImageUrl("about/cursorIcon.png")} alt="UI Icon"/>
                <div className={styles.aboutItemText}>
                <h3>Hackathon</h3>
                <p>Participated in a hackathon in Kyutech and created tutor student project.</p>
                <a href='#projects' className={styles.find}>Find out more</a>
                </div>
            </li>
        </ul>
        </div>
    </section>
  )
}
