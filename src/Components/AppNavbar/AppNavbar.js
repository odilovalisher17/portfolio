import React, {useState} from 'react';
import './AppNavbar.css'

const AppNavbar = () => {
    const [navToggle, setNavToggle] = useState(false)

    const onClickToggle = () => {
        setNavToggle(!navToggle)
    }

  return (
    <div className='navbar'>
      <div className="nav-logo">
          Ali<span style={{color:"rgb(255, 60, 0)"}}>Dev</span>
      </div>

      <div className="nav">
        <div className={navToggle ? 'nav-toggle nav-toggle-t' : 'nav-toggle'}
          onClick={onClickToggle}>
              <div className='nav-toggle1'></div>
              <div className='nav-toggle2'></div>
              <div className='nav-toggle3'></div>
        </div>

         
          <ul className={navToggle ? 'nav-nav show' : 'nav-nav'}>
              <li>
                  <a href="/">Home</a>
              </li>
              <li>
                  <a href="/about">About me</a>
              </li>
              <li>
                  <a href="/portfolio">Portfolio</a>
              </li>
              <li>
                  <a href="/contact">Contact</a>
              </li>
          </ul>
         
      </div>
    </div>
  );
}

export default AppNavbar;
