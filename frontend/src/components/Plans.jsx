import React from 'react'
import {PricingTable} from '@clerk/clerk-react'

const Plans = () => {
  return (
    <div className='max-w-2xl mt-25 mx-auto z-20 my-30 max-md:px-4'>
      <div className='text-center'>
          <h2 className='text-gray-300 text-4xl font-semibold'>Choose Your Plan</h2>
          <p className='text-gray-200 text-sm max-w-md mx-auto'>Start for free and scale up as you grow. Find the perfect plan for your content creation needs</p>
      </div>
      <div className='mt-14 mb-10'>
        <PricingTable/>
      </div>
    </div>
  )
}

export default Plans
