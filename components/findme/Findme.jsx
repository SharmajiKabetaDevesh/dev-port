import styles from "./Findme.module.css";
import React from 'react';

const FindMe = () => {
    return (
        <section className={styles.findme}>
          <div className={styles.find}>
            <h1 className={styles.title}>So How to Find me HUh!!</h1>
            <div className={styles.info}>
              <a href="https://www.linkedin.com/in/devesh-sharma-814b3919a/" target="_blank" rel="noopener noreferrer">Linkedin</a>
              <a href="mailto:deveshrs2016@gmail.com">Gmail</a>
              <a href="https://maps.app.goo.gl/eqKF45of47wN7Tb2A" target="_blank" rel="noopener noreferrer">Datta Meghe College of Engineering Mai</a>
            </div>    
            <h2 className={styles.title}>Phone Number Nahi milega</h2>
          </div>
        </section>
      );
      
}

export default FindMe;
