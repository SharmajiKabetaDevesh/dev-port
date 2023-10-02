import React from 'react'
import styles from './Project.module.css'
import imgtodo from "../../public/todo app android/todo1.jpg"
const Project = () => {
  return (
    <>

    <h1 className={styles.title}>Projects</h1>
    <div className ={styles.p}>
      <div className={styles.fp}>
      <h1>Simple React Todo App</h1>
<p>
A minimalist todo application built with React, enabling 
users to efficiently add, complete,
 and remove tasks. Leveraging React's state management, 
it ensures real-time updates to the task list, showcasing 
the power of interactive user interfaces in web development.
</p>
      </div>
<div className={styles.sp}>
<h1>Replicating UTS App <br/>(Android - Java)</h1>
<p>
This Android app is a replica of the popular ticketing platform Uts
, developed using Java.
 This app allows to create tickets real time to prevent getting caught By TC.
</p>
</div>
<div className={styles.tp}>
<h1>Cynthia Ugwo Website<br/> Recreated</h1>
<p>
This project was interesting as it consisted of creating toggles,floating images,
hovering text,using tailwind css,learning about vh,vw and rem,learned about various css elements.
It was one of the best websites to replicate and learn.
</p>
</div>

    </div>
     
    </>
  );
};

export default Project;
