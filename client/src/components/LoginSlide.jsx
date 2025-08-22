import React from 'react'
import { assets } from '../assets/assets.js'

const LoginSlide = () => {
  return (
    <div className="w-1/2 bg-gradient-to-b from-sky-100 to-sky-200 flex items-center justify-center">
          <img
            src={assets.travel}
            alt="travel illustration"
            className="w-full h-full object-cover"
          />
        </div>
  )
}

export default LoginSlide