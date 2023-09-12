import React, { useState } from 'react'

const Instagram = () => {

  const [likes, setlikes] = useState(0);
  const [comments, setcomments] = useState(0);
  const [share, setshare] = useState(0);
  const [bookmark, setbookmark] = useState(0);
  // **************************************
    

  // ************************************88
  return (
    <div className='container'>

      <div className="">
      {/* ***** ******* ***** ********* ********** ********** ****** ******/}
        <div className="col-md-3">
          <div className='card'>
            <div className='cardbody'>
              
              <img className='img-fluid h-25 ' src="https://i.pinimg.com/736x/04/86/af/0486af5011dc81d19331377e1c13a342.jpg" alt="" />

              <div className='icon mt-1'>

                <button className='like ' onClick={() => { setlikes(likes + 1) }}>{likes}<i class="bi bi-suit-heart"></i></button>
                <button className='comments bg-white' onClick={() => { setcomments(comments + 1) }}>{comments}<i class="bi bi-chat-right"></i></button>
                <button className='share bg-white' onClick={() => { setshare(share + 1) }}> <i class="bi bi-send"></i> </button>
                <button className='bookmark bg-white ' onClick={() => { setbookmark(bookmark + 1) }}> <i class="bi bi-bookmark"></i> </button>
              </div>
            </div>
          </div>
        </div>
      {/* ****** ******* ****** ****** ******* **** *****/}

        <div className="col-md-3">
          <div className='card '>
            <div className='cardbody  '>
            
              <img className='img-fluid h-25' src="https://www.photodoozy.com/uploads/friend-homework-funny-fb-post-photodoozy.jpg" alt="" />

              <div className='icon  mt-1'>
                <button className='like ' onClick={() => { setlikes(likes + 1) }}>{likes}<i class="bi bi-suit-heart"></i></button>
                <button className='comments' onClick={() => { setcomments(comments + 1) }}>{comments}<i class="bi bi-chat-right"></i></button>
                <button className='share' onClick={() => { setshare(share + 1) }}>{share} <i class="bi bi-send"></i> </button>
                <button className='bookmark bg-white ' onClick={() => { setbookmark(bookmark + 1) }}> <i class="bi bi-bookmark"></i> </button>

              </div>
            </div>
          </div>
        </div>
      {/***** **** ******* ******** ******* ***** ******/}
        
        <div className='col-md-3'>

        <div className='card '>
        <div className='cardbody '>
          
          <img className='img-fluid h-25' src="https://img.freepik.com/free-vector/cute-emoticons-editable-template-vector-with-quote-social-media-post_53876-116853.jpg?t=st=1680551750~exp=1680552350~hmac=0148bf8e668c44fb5f50d581e6762bf61978050d68f8af3dd4796dc8a6d0ac4e" alt="" />

          <div className='icon mt-1'>
            <button className='like' onClick={() => { setlikes(likes + 1) }}>{likes}<i class="bi bi-suit-heart"></i></button>
            <button className='comments' onClick={() => { setcomments(comments + 1) }}>{comments}<i class="bi bi-chat-right"></i></button>
            <button className='share' onClick={() => { setshare(share + 1) }}>{share} <i class="bi bi-send"></i> </button>
            <button className='bookmark bg-white ' onClick={() => { setbookmark(bookmark + 1) }}> <i class="bi bi-bookmark"></i> </button>

          </div>
        </div>
      </div>

        </div>
      {/******** ********** ********* ********* ********* ********/}
        
        <div className='col-md-3'>
        <div className='card'>
        <div className='cardbody '>
          <img className='img-fluid h-25' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyKrnjICCRgfe844HzUK3SrcWG50HDqiEX4cOBTos8N-yd50ZMHeXNUfby1jASAaHat9U&usqp=CAU" alt="" />

          <div className='icon mt-1'>
            <button className='like' onClick={() => { setlikes(likes + 1) }}>{likes}<i class="bi bi-suit-heart"></i></button>
            <button className='comments' onClick={() => { setcomments(comments + 1) }}>{comments}<i class="bi bi-chat-right"></i></button>
            <button className='share' onClick={() => { setshare(share + 1) }}>{share} <i class="bi bi-send"></i> </button>
            <button className='bookmark bg-white ' onClick={() => { setbookmark(bookmark + 1) }}> <i class="bi bi-bookmark"></i> </button>

          </div>
        </div>
      </div>

        </div>

      {/******* *********** *********** ******** ********** *********/}
      </div>

    </div>



  )
}

export default Instagram;