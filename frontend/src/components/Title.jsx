import React from 'react'

const Title = ({title,description}) => {
  return (
    <div className='flex flex-col items-center mb-8'>
        <h3 className='text-2xl font-bold text-white'>{title}</h3>
         <p className='text-white max-w-[500px]'>{description}</p>
    </div>
  )
}

export default Title
