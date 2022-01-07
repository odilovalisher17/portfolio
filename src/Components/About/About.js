import React from 'react'
import './About.css'
import foto1 from './programmer.png'

const About = () => {
    return (
        <div className='about'>
            <div className='about-left'>
                <img src={foto1} alt="" />
                <h3>My Experience</h3>

                <div className="chart">
                    <div class="bar bar-75 white">
                        <div class="face top">
                            <div style={{position:"absolute", left:"35%", top:"15%"}}>HTML</div>
                            <div class="growing-bar"></div>
                        </div>
                        <div class="face side-0">
                            <div class="growing-bar"></div>
                        </div>
                        <div class="face floor">
                            <div class="growing-bar"></div>
                        </div>
                        <div class="face side-a"></div>
                        <div class="face side-b"></div>
                        <div class="face side-1">
                            <div style={{position:"absolute", left:"35%", top:"15%", transform:"rotate(180deg)"}}>HTML</div>
                            <div class="growing-bar"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='about-right'>
                
                <h2>About Me</h2>
                <br /> <hr /> <br />
                <p>
                    I am 20 y.o Front-End developer located in Tashkent Uzbekistan. I am a student of Tashkent State Technical University. I know technologies HTML, CSS, Bootstrap, JasaScript(ES6), ReactJS, Redux and Rest API.
                </p>

                <div className='about-icons'>
                    <i style={{color:"black"}} class="fa fa-github"></i>
                    <i style={{color:"blue"}} class="fa fa-telegram"></i>
                    <i class="fa fa-phone"></i>
                    <i style={{color:'rgb(230, 29, 96)'}} class="fa fa-instagram"></i>
                </div>

                <button className='h-btn'>Download Resume</button>
            </div>
        </div>
    )
}

export default About
