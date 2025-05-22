import React from 'react'
import { assets } from '../assets/assets.js'

const Hero = () => {
    return (
        <div className='flex flex-col sm:flex-row border border-gray-400'>

            {/* Hero Left Side */}
            <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0 bg-gradient-to-br from-[#1A0640] to-[#3B0A6F]'>
                <div className='text-[#414141]'>
                    <div className='flex items-center gap-2'>
                        <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                        <p className='font-medium text-sm md:text-base text-[#00c9a7]'>OUR BESTSELLERS</p>
                    </div>
                    <h1 className="prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed">
                        <span className="text-[#00F0FF]">Latest</span>{' '}
                        <span className="text-[#FF4F7A]">Arrivals</span>
                    </h1>

                    <div className='flex items-center gap-2'>
                        <p className='font-semibold text-sm md:text-base text-[#00c9a7]'>SHOP NOW</p>
                        <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p>
                    </div>
                </div>
            </div>

            {/* Hero Right Side */}
            <img className='w-full sm:w-1/2' src={assets.newHero} alt="" />


        </div>
    )
}

export default Hero
