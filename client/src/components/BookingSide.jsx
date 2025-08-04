import React from 'react'
import BookingFeatures from './BookingFeatures'
import BookingForm from './BookingForm'

const BookingSide = ({Features, price}) => {
    const handleBooking=(formData)=>{
        console.log(formData)

    }
  return (
    <aside className='flex flex-col bg-[#FEF9F9] border-black border-1 rounded-2xl mt-40 w-[600px] mb-20'>
        <h1 className='text-left text-[18px] sm:text-[20px] md:text-xl xl:text-2xl font-bold text-gray-800 mb-1 mt-5 ml-5' >{price}$ /per person</h1>
        <BookingFeatures features={Features}/>
        <BookingForm onSubmit={handleBooking} price={price}/>
    </aside>
  )
}

export default BookingSide