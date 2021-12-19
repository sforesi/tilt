import React from 'react'

const DisplayInfo = (props) => {
  console.log(props.description)
  return (
    <div className='game-detail'>
      <h1>Game Details</h1>
      <h3>Title</h3>
      <h3>Release Year</h3>
      <h3>Metacritic Rating</h3>
      <h3>Developer</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantiums quos, sed corporis nobis alias amet explicabo eius cum repudiandae enim soluta asperiores eligendi. Est incidunt praesentium fugit provident harum aperiam!</p>

    </div>
  )
}

export default DisplayInfo