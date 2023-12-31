import { useFormik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import * as Yup from 'yup';
import { motion } from 'framer-motion';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
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

  const navigate = useNavigate()

  //initialize formik
  const signupForm = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirm: '',

    },
    onSubmit: async (values) => {
      console.table(values);

      const res = await fetch('http://localhost:5000/user/add', {
        method: 'POST',
        //  convert js into json
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json',

        }
      });

      console.log(res.status);
      if (res.status === 200) {
        Swal.fire({
          icon: 'success',
          title: 'Signup Success',
          text: 'Now Login to Continue'
        })
        navigate('/login');
      }
      else {
        Swal.fire({
          icon: 'error',
          title: 'Somthing went wrong',
          text: 'Please Try Again'
        })
      }

    },
    validationSchema: SignupSchema
  })
  const uploadfile = async (e) => {
    if (!e.target.files) return;

    const file = e.target.files[0];

    const fd = new FormData();
    fd.append('myfile', file);
    const res = await fetch('http://localhost:5000/util/uploadfile', { method: 'POST', body: fd })
    console.log(res.status);
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.2, x: '100%' }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      className='container mt-5'>
      <div className='card bg-light w-25 m-auto' >
        <h3 className='text-center mt-3'>Sign Up</h3>
        <div className='card-body'>
          <form onSubmit={signupForm.handleSubmit}>


            <label htmlFor="">Name</label>
            <span style={{ color: "red", fontSize: 10, marginLeft: 10 }}>{signupForm.errors.name}</span>
            <input id="name" onChange={signupForm.handleChange} value={signupForm.values.name} type="text" className='form-control' placeholder='Name' />

            <label htmlFor="">Email</label>
            <span style={{ color: "red", fontSize: 10, marginLeft: 10 }}>{signupForm.errors.email}</span>
            <input id="email" onChange={signupForm.handleChange} value={signupForm.values.email} type="email" className='form-control' placeholder='Email' />

            <label htmlFor="">Password</label>
            <span style={{ color: "red", fontSize: 10, marginLeft: 10 }}>{signupForm.errors.password}</span>
            <input id="password" onChange={signupForm.handleChange} value={signupForm.values.password} type="password" className='form-control' placeholder='Password' />

            <label htmlFor=""> Confirm Password</label>
            <span style={{ color: "red", fontSize: 10, marginLeft: 10 }}>{signupForm.errors.password}</span>
            <input id="confirm" onChange={signupForm.handleChange} value={signupForm.values.confirm} type="password" className='form-control' placeholder='confirm Password' />

            <label>Uploade Image</label>
            <input type="file" className='text-center' onChange={uploadfile} />

            <p className='mt-3 text-center'>Already a member? Log in</p>
            <button type='submit' className='btn btn-primary d-grid mx-auto'>Sign up</button>
          </form>


        </div>


      </div>
    </motion.div>
  )
}

export default Signup;