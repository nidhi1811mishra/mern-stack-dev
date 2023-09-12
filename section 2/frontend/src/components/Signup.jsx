import {useFormik} from 'formik'
import React from 'react'
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  // lastName: Yup.string()
  //   .min(2, 'Too Short!')
  //   .max(50, 'Too Long!')
  //   .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});
const Signup = () => {
   
   //initialize formik
   const signupForm = useFormik({
    initialValues:{
      name: '',
      email:'',
      password:'',
      confirm:'',

    },
    onSubmit:(values)=>{
      console.table(values);
    },
    validationSchema : SignupSchema
   })
   
  return (
    <div className='container mt-5'>
      <div className='card bg-light w-25 m-auto' >
        <h3 className='text-center mt-3'>Sign Up</h3>
        <div className='card-body'>
        <form onSubmit={signupForm.handleSubmit}>

       
         <label htmlFor="">Name</label>
         <span style={{color:"red",fontSize: 10, marginLeft:10}}>{signupForm.errors.name}</span>
        <input id="name" onChange={signupForm.handleChange} value={signupForm.values.name} type="text" className='form-control' placeholder='Name'  /> 
      
        <label htmlFor="">Email</label>
        <span style={{color:"red",fontSize: 10, marginLeft:10}}>{signupForm.errors.email}</span>
        <input id="email" onChange={signupForm.handleChange} value={signupForm.values.email}  type="email" className='form-control' placeholder='Email'  />
       
        <label htmlFor="">Password</label>
        <span style={{color:"red",fontSize: 10, marginLeft:10}}>{signupForm.errors.password}</span>
        <input id="password" onChange={signupForm.handleChange} value={signupForm.values.password}  type="text" className='form-control' placeholder='Password'  />
       
        <label htmlFor=""> Confirm Password</label>
        <span style={{color:"red",fontSize: 10, marginLeft:10}}>{signupForm.errors.password}</span>
        <input id="confirm" onChange={signupForm.handleChange} value={signupForm.values.confirm}  type="text" className='form-control' placeholder='confirm Password'  />
        
        <p className='mt-3 text-center'>Already a member? Log in</p>
        <button type='submit' className='btn btn-primary d-grid mx-auto'>Sign up</button>
        </form>
        
         
        </div>


        </div>
    </div>
  )
}

export default Signup;