import React from 'react'
import './Portfolio.css'
import Projects from './Projects'
import photo1 from './project1.png'
import photo2 from './project2.png'
import photo3 from './project3.png'
import photo4 from './project4.png'
import photo5 from './project5.png'

const Portfolio = () => {
    return (
        <div style={{paddingBottom:"2rem"}}>
            <div className='port-header'>
                <h2>
                    My Works
                </h2>
            </div>

            <div className='port-main'>
                <Projects
                    img={photo1}
                    textHeader='Web site of the shop'
                    text='I used React.Js and Bootstrap. Created for only desktop.'
                    demo='https://nafatask1.netlify.app/'
                    code='https://github.com/odilovalisher17/NAFA_TASK_1' />

                <Projects
                    img={photo2}
                    textHeader='Sorting movies'
                    text='I used HTML, CSS and JavaScript.'
                    demo='https://gracious-heisenberg-e86e22.netlify.app/'
                    code='https://github.com/odilovalisher17/react' />
                    
                <Projects
                    img={photo3}
                    textHeader='Clone of Mercedens-benz'
                    text='I used HTML and CSS. Created for only desktop.'
                    demo='https://blissful-leakey-6b27b8.netlify.app/'
                    code='https://github.com/odilovalisher17/mercedesBensClone' />

                <Projects
                    img={photo4}
                    textHeader='Mirage'
                    text='I used HTML and CSS. Created for only desktop.'
                    demo='https://www.mirage1.cf/'
                    code='https://github.com/odilovalisher17/mirage' />

                <Projects
                    img={photo5}
                    textHeader='Education Center'
                    text='I used React, Redux, Firebase and Bootstrap.'
                    demo='https://kurs1.netlify.app/'
                    code='https://github.com/odilovalisher17/kurs' />
            </div>
        </div>
    )
}

export default Portfolio
