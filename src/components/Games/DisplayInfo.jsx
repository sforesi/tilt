import React from 'react'

const DisplayInfo = (props) => {
  return (
    <div className='game-detail'>
      <h1>{props.id}</h1>
    </div>
  )
}

export default DisplayInfo