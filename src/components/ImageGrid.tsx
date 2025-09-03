import React from 'react'

const ImageGrid = () => {
  return (
    <div className='w-[50%] space-y-4'>
        <img src='./creme.jfif'
        className='h-[500px] w-full object-fill'
        />
        <div className='grid grid-cols-3 gap-2'>
        <img src='./black.jfif'
        className='h-40 w-full cursor-pointer hover:scale-105 transition-transform duration-300'
        />
        <img src='./cyan.jfif'
        className='h-40 w-full cursor-pointer hover:scale-105 transition-transform duration-300'
        />
        <img src='./pink.jfif'
        className='h-40 w-full cursor-pointer hover:scale-105 transition-transform duration-300'
        />
        </div>
    </div>
  )
}

export default ImageGrid