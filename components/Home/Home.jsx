import React from 'react'
import styles from "./Home.module.css"
import Project from "../Projects/Project"
import About from "../About/About"
import FindMe from "../findme/Findme"
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <section>
 <div className={styles.navbar}>
        <div> <h1>Found Me Huh!!</h1></div>
<div className={styles.menu}>
  
      {/* <h2>Home</h2>
      <h2>Projects</h2>
      <h2>About</h2>
      */}
      </div>
      </div>
      <div className={`${styles.head} ${styles.slideIn}`}>
        <div className={styles.upper}><h1>Devesh</h1></div>
        <div className={styles.lower}><h1>Sharma</h1>
        <h3>A person who always <br/> gets played by software</h3>
        </div>
      </div>
    
    </section>
   

      
    
  )
}

export default Home
