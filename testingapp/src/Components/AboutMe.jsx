import React from "react";
import About_img from "../Img/about_img.png";
import "./AboutMe.css"

const AboutMe = () =>{
    return (
        <>
         <div className="AboutMe">
            <div className="about_header"><h1>About Me</h1></div>
            <div className="about_main">
                <div className="about_main_pic"><img src={About_img} alt="about_img" /></div>
                <div className="about_main_title">
                    <div className="about_title_text"><h2>SoulKing</h2><h4>Web Developer & Student</h4></div>
                    <div className="about_title_icons">
                    <span class="dot" style={{backgroundImage: "url(https://img.icons8.com/color/512/visual-studio-code-2019.png)", backgroundSize: "52px 52px"}}></span>
                    <span class="dot" style={{backgroundImage: "url(https://img.icons8.com/color/512/visual-studio-code-2019.png)", backgroundSize: "52px 52px"}}></span>
                    <span class="dot" style={{backgroundImage: "url(https://img.icons8.com/color/512/visual-studio-code-2019.png)", backgroundSize: "52px 52px"}}></span>
                    </div>
                </div>
            </div>
            <div className="about_describe"><p>The robot clicked disapprovingly, gurgled briefly inside its cubical interior and extruded a pony glass of brownish liquid. "Sir, you will undoubtedly end up in a drunkard's grave, dead of hepatic cirrhosis," it informed me virtuously as it returned my ID card. I glared as I pushed the glass across the table.The robot clicked disapprovingly, gurgled briefly inside its cubical interior and extruded a pony glass of brownish liquid. "Sir, you will undoubtedly end up in a drunkard's grave, dead of hepatic cirrhosis," it informed me virtudrunkard's grave, dead of hepatic cirrhosis," it informed me virtuously as it returned my ID card. I glared as I pushed the glass across the table.The robot clicked disapprovingly, gurgled briefly inside its cubical interior and extruded a pony glass of brownish liquid. "Sir, you will undoubtedly end up in a drunkard's grave, dead of hepatic cirrhosis," it informed me virtuously as it returned my ID card. I glared as I pushed the glass across the table.</p></div>
            <div className="about_skills">
                <div className="about_skills_header"><h3>Skills</h3></div>
                <div className="about_skills_desc">
                 <div className="about_skills_frontend">
                    <b>Frontend</b>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>ReactJs</li>
                        <li>Bootstrap</li>
                    </ul>
                </div>
                 <div className="about_skills_backend">
                    <b>Backend</b>
                    <ul>
                        <li>NodeJS</li>
                        <li>MongoDB</li>
                        <li>Expressjs</li>
                        <li>RESTful API</li>
                    </ul>
                </div>
                 <div className="about_skills_knowledge">
                    <b>Knowledge</b>
                    <ul>
                        <li>Responsive Design</li>
                        <li>Data Visualization</li>
                        <li>Accsessability</li>
                        <li>JS Frameworks</li>
                        <li>CSS Frameworks</li>
                    </ul>
                </div>
                </div>
            </div>
            <div className="about_resume"></div>
         </div>    
        </>
    );
}

export default AboutMe;