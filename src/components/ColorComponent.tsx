import React from 'react'

const ColorComponent = () => {
  return (
    <div>
        <p className='font-semibold text-lg'>Choose a color</p>
        <div className='flex space-x-2 py-2'>
            <img src='./black.jpg'
            className='rounded-full h-8 w-8 cursor-pointer'
            />
            <img src='./creme.jpg'
            className='rounded-full h-8 w-8 cursor-pointer'
            />
            <img src='./cyan.jpg'
            className='rounded-full h-8 w-8 cursor-pointer'
            />
            <img src='./pink.jpg'
            className='rounded-full h-8 w-8 cursor-pointer'
            />
        </div>
    </div>
  )
}

export default ColorComponent