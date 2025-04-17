import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hola, Soy Nicolas Gonzalez</h1>
                <p className={styles.description}>
                    Desarrolador Frontend y Backend con experiencia en
                    tecnologias como React, Node.js, Express, SQL entre otras.
                </p>
                <div className={styles.containerBtn}>
                    <a href="/cv.pdf" download className={styles.contactBtn}>
                        Hoja de vida
                    </a>
                    <a
                        href="mailto:myemail@email.com"
                        className={styles.contactBtn}
                    >
                        Email
                    </a>
                </div>
            </div>
            <img
                src={getImageUrl("hero/Niko.png")}
                alt="Hero image of me"
                className={styles.heroImg}
            />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    );
};
