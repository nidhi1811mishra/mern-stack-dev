import React from 'react'
import'./skills.css';
const Skills = () => {
  return (
    
        <section id='skills'>
             <div className='text'> 

           <span className='skilltitle text-white '>My Skills</span>
             <span className='skillDesc text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente non dicta officia rem obcaecati ducimus fuga ab nulla vel repudiandae! </span>
             </div>
             
             <div className='skillbars'>
              <div className='skillbar'> 
              <div className="skill_bar_text">
                <img className='skill_img'  src="https://cdn-icons-png.flaticon.com/128/3419/3419222.png" alt="" />
               {/* <img src="https://cdn-icons-png.flaticon.com/512/3419/3419222.png" alt="" /> */}
                <h2>App Design</h2>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae eaque accusamus ullam!</p>
              </div>
             </div>
             <div className='skillbar'>
              <div className='skill_bar_text'>
                <img className='skill_img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd-vtzaJ5jvvtZkqT5E6gB_j0biaNJRkrHTpruNpIan-cG4BLaMknZEDYX7ABggtAiJlQ&usqp=CAU" alt="" />
                <h2>Web Design</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis placeat iste facere.</p>
              </div>
             </div>
             <div className='skillbar'>
              <div className='skill_bar_text'>
                <img className='skill_img' src="https://cdn.xxl.thumbs.canstockphoto.com/ux-ui-design-icon-vector-outline-illustration-ux-ui-design-icon-vector-ux-ui-design-sign-color-eps-vectors_csp84355634.jpg" alt="" />
                {/* <img className='skill_img' src="https://d3sxshmncs10te.cloudfront.net/icon/premium/png-256/3421748.png?token=eyJhbGciOiJoczI1NiIsImtpZCI6ImRlZmF1bHQifQ__.eyJpc3MiOiJkM3N4c2htbmNzMTB0ZS5jbG91ZGZyb250Lm5ldCIsImV4cCI6MTY5NDY0OTYwMCwicSI6bnVsbCwiaWF0IjoxNjk0NDQ2MzEyfQ__.b37415448719cc260130bf4f3fbd69ffc800bff464b018a1ed7737a0251c8dc3" alt="" /> */}
                <h2>UI/UX Design</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae unde tenetur officia.</p>
              </div>
             </div>
            </div>   
            
        </section>


  )
}

export default Skills;