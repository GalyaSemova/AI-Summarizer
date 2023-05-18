import React from 'react'
import { logo } from '../assets';

const Hero = () => {
  return (
    <header className='w-full flex 
    justify-center items-center flex-col'>
      <nav className='flex justify-between
      items-center w-full mb-10 pt-3 '>
        <img src={ logo } alt="summaryCreator_logo"
        className='w-28 object-contain' />

        <button
        type='button'
        onClick={() => {window.open('https://bg.linkedin.com/in/galinasemova')}}
         className='black_btn'
         >
          Contacts
        </button>
      </nav>

      <h1 className='head_text'>
        Make a Summary of Your Text With <br 
        className='max-md:hidden'/>
        <span
        className='orange_gradient'>OpenAI GPT-4</span>
      </h1>
      <h2 className='desc'>
      Enhance your reading experience with condensed 
      article summaries that capture the essence of lengthy texts. 
      {/* Effortlessly grasp the main points and key ideas in a more concise and professional format. */}
      </h2>

    </header>
  )
}

export default Hero