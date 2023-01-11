import "../css/heroStyles.css"; 
import React from 'react'
import Hero from "../assests/mybackground.jpg";
import Intro from "../assests/intro.jpg";
import {Link} from "react-router-dom";
const Heroimage = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img" src={Hero} alt="IntroImg"/>
            <img className="into-img" src={Intro} alt="IntroImg"/>
        </div>
      <div className="content">
        <p>HI,I'M RANJITH</p>
        <h1>FULL STACK DEVELOPER</h1>
        <p>I am a passionate,HardWorking & fresher looking for an opportunity to work in a challenging environment and grow up with the organization.
</p>
        <div style={{marginTop:"50px"}}>
        <Link to="/Project" className="btn">Projects</Link>
        <Link to="/Contact" className=" btn btn-light">Contact</Link>
      </div>
      </div>
      
    </div>
  )
}

export default Heroimage
