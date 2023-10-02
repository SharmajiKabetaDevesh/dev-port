
'use client'
import React from 'react'
import Home from "../../components/Home/Home"
import Project from "../../components/Projects/Project"
import About from "../../components/About/About"
import FindMe from "../../components/findme/Findme"
import { BrowserRouter as Router, Route, Routes,Switch } from 'react-router-dom'

const page = () => {
  return (
    
    <>
    <Home/>
    <Project/>
    <About/>
    <FindMe/>
{/* 
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/about" element={<About />} />
        <Route path="/findme" element={<FindMe />} />
      </Routes>
    </Router>   */}
    </>
    // <Router>
    //   <Switch>
    //     <Route path="/" exact component={Home}/>
    //     <Route path="/Project" exact component ={Project}/>
    //     <Route path="/About"exact component ={About}/>
    //     <Route path="/FindMe" exact component ={FindMe}/>

    //   </Switch>
    // </Router>
    
  )
}

export default page;
