import React from 'react'
import './about.css'
const About = () => {
  return (
    
      <section id='about'>
        <h1 className='title text-white'>About me</h1>
           <div>

          {/* <img src="https://img.freepik.com/premium-vector/cute-business-woman-office-with-laptop_126609-30.jpg?w=2000" alt="" /> */}
       <img className='about-pic'  src="https://www.opentechinfo.com/wp-content/uploads/2018/08/whatsapp-dp.png" alt="" />
           </div>
           <div className='abouts'>
            <div className='about_1'>
              
              <div className='about_text text-dark '>
                <img className='exp_img' src="https://static.thenounproject.com/png/223620-200.png" alt="" />
              {/* <img src="https://www.freeiconspng.com/uploads/computer-user-icon-31.png" alt="" /> */}
               <h3>Experience</h3>
               <p>2+year <br /> Frontend Development</p>
              </div>
                </div>
                <div className='about_2'>  

              <div className='about_text text-dark'>
              <img className='edu_img' src="https://static.thenounproject.com/png/418554-200.png" alt="" />
               <h3>Education</h3>
               <p>10+2 <br />b tech</p>
                </div>

              </div>

              <div className='about-3'>
                <div className='about_text'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias architecto expedita voluptates atque quis, dicta magnam quo tempora, officiis perspiciatis, corrupti suscipit nisi. Quas non totam deserunt iusto expedita cum?</p>                  
                  </div> 

              </div>
              
            </div>
            <div ></div>


        {/* </div> */}
       

      
       </section>
    
  )
}

export default About;