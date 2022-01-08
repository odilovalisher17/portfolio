import React from 'react'
import './About.css'
import foto1 from './programmer.png'
import {NavLink} from 'react-router-dom'

const About = () => {
    return (
        <div className='about'>
            <div className='about-left'>
                <img src={foto1} alt="" />
                
               <div style={{textAlign:"center"}}>
                <h3 style={{paddingBottom:"10px"}}>My Experience</h3>
                    <div id="container">
                        <input type="checkbox" id="water"/>
                        <label for="water">
                            <p style={{position:"absolute",left:"40%", top:"15%" ,zIndex:"1000", color:"red"}}>HTML</p>
                            <div id="fill" className='fill-color-1'></div>
                        </label>
                    </div>

                    <div id="container">
                        <input type="checkbox" id="water"/>
                        <label for="water">
                            <p style={{position:"absolute",left:"40%", top:"15%" ,zIndex:"1000", color:"red"}}>CSS</p>
                            <div id="fill" className='fill-color-2'></div>
                        </label>
                    </div>

                    <div id="container">
                        <input type="checkbox" id="water"/>
                        <label for="water">
                            <p style={{position:"absolute",left:"40%", top:"15%" ,zIndex:"1000", color:"red"}}>JavaScript</p>
                            <div id="fill" className='fill-color-3'></div>
                        </label>
                    </div>

                    <div id="container">
                        <input type="checkbox" id="water"/>
                        <label for="water">
                            <p style={{position:"absolute",left:"40%", top:"15%" ,zIndex:"1000", color:"red"}}>ReactJS</p>
                            <div id="fill" className='fill-color-4'></div>
                        </label>
                    </div>
               </div>
            </div>
            
            <div className='about-right'>
                <div className='about-right-div'>
                    <h2>About Me</h2>
                    <br /> <hr /> <br />
                    <p>
                        I am 20 y.o Front-End developer located in Tashkent Uzbekistan. I am a student of Tashkent State Technical University. I know technologies HTML, CSS, Bootstrap, JasaScript(ES6), ReactJS, Redux and Rest API.
                    </p>

                    <div className='about-icons'>
                        <a href="https://www.github.com/odilovalisher17">
                            <i style={{color:"black"}} class="fa fa-github"></i>
                        </a>
                        <a href="https://t.me/li2690">
                            <i style={{color:"#fff"}} class="fa fa-telegram"></i>
                        </a>
                        <a href="">
                            <i style={{color:"greenyellow"}} class="fa fa-phone"></i>
                        </a>
                        <a href="https://www.instagram.com/odilovalisher10">
                            <i style={{color:'rgb(230, 29, 96)'}} class="fa fa-instagram"></i>
                        </a>
                    </div>

                    <div style={{textAlign:"center", paddingTop:"1rem"}}>
                        <button className='a-btn'>Download Resume</button>
                        <NavLink to="/portfolio">
                            <button className='a-btn'>Portfolio</button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
