import { useState } from 'react';

const ImageGrid = () => {
  const [mainImage, setMainImage] = useState('./cremee.jpg'); // default big image

  return (
    <div className='w-[50%] space-y-3'>
      <img
        src={mainImage}
        className='h-[60vh] w-full object-fill'
      />
      <div className='grid grid-cols-4 gap-3'>
        <img
          src='./cremee.jpg'
          className='h-[20vh] w-full cursor-pointer hover:scale-105 transition-transform duration-300'
          onClick={() => setMainImage('./cremee.jpg')}
        />
        <img
          src='./black.jfif'
          className='h-[20vh] w-full cursor-pointer hover:scale-105 transition-transform duration-300'
          onClick={() => setMainImage('./black.jfif')}
        />
        <img
          src='./cyan.jfif'
          className='h-[20vh] w-full cursor-pointer hover:scale-105 transition-transform duration-300'
          onClick={() => setMainImage('./cyan.jfif')}
        />
        <img
          src='./pink.jfif'
          className='h-[20vh] w-full cursor-pointer hover:scale-105 transition-transform duration-300'
          onClick={() => setMainImage('./pink.jfif')}
        />
      </div>
    </div>
  );
}

export default ImageGrid;
