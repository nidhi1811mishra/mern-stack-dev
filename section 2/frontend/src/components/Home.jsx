import React from 'react'
import logo from './logo192.png';

const Home = () => {
  return (
    <div>
        <h1>Welcome to Home Page</h1>
        <h1>nidhi</h1>
        <h1 style={{color : 'red',background:'yellow'}}>Using CSS code in jSX</h1>
        <input type="text" />
        <br />
        <hr />
        <h1 className='myclasscd'>Using ClassName</h1>
        <img src="/logo192.png" alt="" />
        <img src={logo} alt="" />
    </div>
  )
}

export default Home;