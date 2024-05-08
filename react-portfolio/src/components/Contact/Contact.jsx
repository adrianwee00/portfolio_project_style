import React from 'react'
import { getImageUrl } from '../../utils'

import styles from "./Contact.module.css"

export const Contact = () => {
  return (
    <footer id='contact' className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} alt= "Email icon"/>
                <a href="mailto:adrian.wee00@gmail.com">adrian.wee00@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedinIcon.png")} alt= "linkedin icon"/>
                <a href="https://www.linkedin.com/in/adrian-wee-yian-kiat-3b5578bb/">linkedin.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/githubIcon.png")} alt= "github icon"/>
                <a href="https://github.com/adrianwee00">github.com</a>
            </li>
        </ul>
    </footer>
  )
}
