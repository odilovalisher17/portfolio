import React, {useEffect, useState} from 'react';
import {NavLink} from 'react-router-dom'
import './HomePage.css'
import photo1 from './photo5.png'

const words = ["Hello, I am Alisher", "I am Front End Developer", "Welcome to my Personal Website", ""];


const Homepage = () => {

  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const [reverse, setReverse] = useState(false);

  // typeWriter
  useEffect(() => {
    if (index === words.length-1 && subIndex === 0) {
      setIndex(0)
      setReverse(false)
      console.log("hello")
      return;
    };

    if ( subIndex === words[index].length + 1 && !reverse ) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse && index !== words.length-1) {
      setReverse(false);
      setIndex((prev) => prev + 1);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 75 : subIndex === words[index].length ? 1000 :
                150, parseInt(Math.random() * 350)));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  // blinker
  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout2);
  }, [blink]);

  return (
    <>
      <div className='homepage'>
        <div className='left-side'>
          <div>
            <img className='left-side-img' src={photo1} alt="" />
            <p>
              {`${words[index].substring(0, subIndex)}${blink ? "|" : " "}`}
            </p>
          </div>
        </div>

        <div className='left-side-bottom'>
          <NavLink to='/portfolio'>
            <button className='h-btn'>Portfolio</button>  
          </NavLink>
          
          <NavLink to='/about'>
            <button className='h-btn'>Resume</button>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Homepage;
