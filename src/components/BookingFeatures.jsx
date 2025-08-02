import React from 'react'

const BookingFeatures = ({features}) => {
  return (
    <div className='flex flex-col '>
        {features.map((feature, i)=><h2 key={i} className='text-left text-2xl font-medium text-[#6C6464] mb-1 mt-7 ml-5'>
            {feature}
        </h2>)}

    </div>
  )
}

export default BookingFeatures