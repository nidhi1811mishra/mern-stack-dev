import { useFormik } from 'formik';
import React from 'react'
import * as Yup from 'yup';
import{motion} from 'framer-motion';
const contactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
});

const Contact = () => {
  const contactForm = useFormik ({
    initialValues:{
      name:'',
      email:'',
      msg:'',
    },

    onSubmit:(values)=> {
      console.table(values);
    },
    validationSchema: contactSchema
  })
  return (
    <motion.div 
    initial={{opacity:0, scale:0.2 ,y:'100%'}}
    animate={{opacity:1, scale:1 , y:0}}
    className='mt-5'>
        
        <div className='col-md-4 col-sm-6 mx-auto'>
          
            <div className=' card bg-warning-subtle m-auto'>
                <h3 className='m-auto  p-4 text-align-center'>Contact Us</h3>
              <div className='card-body'>
                <form onSubmit={contactForm.handleSubmit} >
                  <span style={{color:"red",fontSize: 10, marginLeft:10}} >{contactForm.errors.name}</span>
                <input className=' p-1  form-control' id='name' onChange={contactForm.handleChange} value={contactForm.values.name} type="text" placeholder='Name' />
                 <span style={{color:"red",fontSize: 10, marginLeft:10}} >{contactForm.errors.name}</span>
                <input className=' p-1 mt-3 form-control' id='email' onChange={contactForm.handleChange} value={contactForm.values.email} type="email" placeholder='Email' />
                <span style={{color:"red",fontSize: 10, marginLeft:10}} >{contactForm.errors.name}</span>
                <textarea  rows="5" border-radius="7" className='form-control mt-4 p-1' id='msg' onChange={contactForm.handleChange} value={contactForm.values.msg} type="email" placeholder="Message"/>
           
                <div class=" mt-3">
             <button type='submit' className="btn btn-primary d-grid w-50 mx-auto  ">Submit</button>
             
         </div>
         </form>
         </div>
            </div>

           

            </div>
             
        </motion.div>
    
  )
}

export default Contact;