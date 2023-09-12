import React from 'react'

const EventHandling = () => {
  let count=5;
  return (
    <div className='container'>
        <h1 className='text-center'>Event Handling</h1>
        <hr />
        <button className='btn btn-primary'onClick={ ()=>{alert('botten was clicked')}}>Click Event</button>
        <input 
        type="text"
        className='form-control'
        onChange={(e)=>{
            console.log(e.target.value)
        }} />
           <input type="color" className='mt-5' onChange={(e)=>{document.body.style.backgroundColor = e.target.value}} />
          
          <button className='btn btn-primary mt-5' onClick={() => {count++; console.log(count);}}>Add Count </button>
          <h1>{count}</h1>
    </div>
  )
}

export default EventHandling
