import React from 'react'

type ButtonProps = {
  name: string;
  buttonFunction: () => void;
};

export const Button: React.FC<ButtonProps> = ({ name, buttonFunction }) => {
  return (
    <button onClick={buttonFunction} className='border p-2 rounded-full w-50 cursor-pointer hover:text-blue-950 hover:font-semibold'>
        {name}
    </button>
  )
}
