import React, { useState } from 'react'

const StateManagement = () => {
    const[likes, setlikes]=  useState(0);
    const[coments, setcoments]=useState(10);
    
  return (
    <div className='container'>
       <h1 className='text-center'> State Management</h1>
       <hr />
       <button className='btn btn-primary mt-4'
        onClick={()=>{
            setlikes(likes+1)
            }}
            >
                {likes}Likes
                </button>
                
                <br />

                <button className='btn btn-primary m-5 '
        onClick={()=>{
            setcoments(coments+2)
            }}
            >
                {coments}coments
                </button>
        </div>
  )
}

export default StateManagement;