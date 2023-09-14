import { useFormik } from 'formik';
import React from 'react'
import'./contact.css'
import * as Yup from 'yup';
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
    <div  className='mt-5 back'>
        
        <div className='col-md-4 col-sm-6 mx-auto main '>
          
            <div className=' card bg-danger-subtle  m-auto'>
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
             
        </div>
    
  )
}

export default Contact;