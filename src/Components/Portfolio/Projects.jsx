import React from 'react';
import './Portfolio.css'

const Projects = props => {
    const {img, textHeader, text, demo, code} = props
  return (
    <div>
      <div className='project'>
          <div style={{justifySelf:"start"}}><img src={img} alt="" /></div>

          <div style={{justifySelf:"center"}}>
            <p className='project-header'>{textHeader}</p>
            <hr /> <br />
            <p className='project-text'>{text}</p>
          </div>

          <div className='project-btns'>
            <button className='project-btn btn-demo'>
              <a href={demo}>Demo <i class="fa fa-globe"></i></a>
            </button>
            <button className='project-btn btn-code'>
              <a href={code}>Source <i class="fa fa-github" aria-hidden="true"></i></a>
            </button>
          </div>
      </div>
    </div>
  );
}

export default Projects;
