import "../css/AboutContentstyle.css";
import React from 'react'
// import { Link } from "react-router-dom";
import Reactjs from "../assests/reactjs.png";
import Nodejs from "../assests/nodejs.png";
import CV from "../assests/RanjithCv.pdf";
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaNodeJs } from "react-icons/fa";
const AboutContent = () => {
    return (
        <div className="about">
            <div className="left">
                <h1 >Who Am I</h1>
                <p>I am a Full Stack Developer</p>
                <div className="icons">
                    <FaHtml5 size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                    <FaCss3Alt size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                    <FaJsSquare size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                    <FaReact size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                    <FaNodeJs size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                </div>
                <a href="https://drive.google.com/file/d/13s5kfHDqnCXWyoRh1jF-KHBjpH3HJW8n/view?usp=share_link" target="_blank">
                <button  className="btn">View My CV</button>
                </a>
                    
                
            </div>
            <div class="wrapper">
                <div class="skill">
                    <p>HTML5</p>
                    <div class="skill-bar skill1 wow slideInLeft animated">
                        <span class="skill-count1"><p>85%</p></span>
                    </div>
                </div>
                <div class="skill">
                    <p>CSS3</p>
                    <div class="skill-bar skill2 wow slideInLeft animated">
                        <span class="skill-count2"><p>55%</p></span>
                    </div>
                </div>
                <div class="skill">
                    <p>JAVASCRIPT</p>
                    <div class="skill-bar skill3 wow slideInLeft animated">
                        <span class="skill-count3"><p>70%</p></span>
                    </div>
                </div>
                <div class="skill">
                    <p>REACT JS</p>
                    <div class="skill-bar skill4 wow slideInLeft animated">
                        <span class="skill-count4"><p>70%</p></span>
                    </div>
                </div>
                <div class="skill">
                    <p>NODE JS</p>
                    <div class="skill-bar skill5 wow slideInLeft animated">
                        <span class="skill-count5"><p>65%</p></span>
                    </div>
                </div>
                <div class="skill">
                    <p>MONGODB</p>
                    <div class="skill-bar skill6 wow slideInLeft animated">
                        <span class="skill-count6"><p>80%</p></span>
                    </div>
                </div>
            </div>
            <div className="right">
                <div className="img-container">
                    <div className="top">
                        <img src={Reactjs} className="img" alt="true" />
                    </div>
                    <div className="bottom">
                        <img src={Nodejs} className="img" alt="true" />
                    </div>
                </div>
            </div>


        </div>
    )
}

export default AboutContent
