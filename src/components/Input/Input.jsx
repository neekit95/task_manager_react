import React from 'react'
import Button from '../Button/Button'
function Input() {
  return (
    <div className='Input_component'>
      <input 
      type="text"
      placeholder='Enter the task'

      
       />

<Button text='create task' bc='rgb(173, 233, 173)'/>
    </div>
  )
}

export default Input
