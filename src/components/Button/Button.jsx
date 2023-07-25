import React from 'react'

function Button(props) {
  return (
    <div className='Button_component'>
      <button
      style={{
        backgroundColor: props.bc,
      }}
      >{props.text}</button>
    </div>
  )
}

export default Button
