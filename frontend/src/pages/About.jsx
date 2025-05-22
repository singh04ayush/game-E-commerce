import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
      
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img src={assets.gameRemote} className='w-full md:max-w-[450px]' alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>We're not just another game store—we're your cheat code to epic loot, legendary wins, and sleepless nights fueled by endless adventures.</p>
          <p>From AAA titles to hidden indie gems, we've got the ultimate collection to power up your library. No side quests required—just grab, play, and conquer!</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>To bring gamers the best deals, instant access, and the thrill of unlocking new worlds—because waiting for a game to arrive in the mail is so last century.</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>No RNG here—every game key is legit, verified, and ready to launch faster than your favorite speedrunner.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Instant delivery means no more waiting around—your next adventure begins the moment you hit 'buy'.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Got questions? We’ve got answers—unless you’re asking for cheat codes. Those, you’ll have to find on your own.</p>
        </div>

      </div>

      <NewsLetterBox />

    </div>
  )
}

export default About
