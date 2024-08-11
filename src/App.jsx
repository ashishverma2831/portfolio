import React from 'react'
import { Dock, DockIcon } from './components/magicui/dock'

const App = () => {
  return (
    <>
      <section className='md:max-w-screen-md mx-auto h-[600px] bg-red-400' id='about'>About</section>
      <section className='md:max-w-screen-md mx-auto h-[600px] bg-yellow-400' id='education'>Education</section>
      <section className='md:max-w-screen-md mx-auto h-[600px] bg-green-400' id='hero'>Hero</section>
      <section className='md:max-w-screen-md mx-auto h-[600px] bg-blue-400' id='projects'>Projects</section>
      <section className='md:max-w-screen-md mx-auto h-[600px] bg-orange-400' id='skills'>Skills</section>
      <section className='md:max-w-screen-md mx-auto h-[600px] bg-purple-400' id='certificates'>Certificates</section>
      <section className='md:max-w-screen-md mx-auto h-[600px] bg-sky-400' id='subscribe'>Subscribe</section>
      <section className='md:max-w-screen-md mx-auto h-[600px] bg-pink-400' id='contacts'>Contacts</section>

        <Dock className='rounded-full shadow-2xl px-4 bg-red-300 sticky bottom-8 flex justify-around'>
          <DockIcon className='hover:bg-stone-300/50 bg-red-700' id='#about'>About</DockIcon>
          <DockIcon id='#education'>Education</DockIcon>
          <DockIcon id='#hero'>Hero</DockIcon>
          <DockIcon id='#projects'>Projects</DockIcon>
          <DockIcon id='#skills'>Skills</DockIcon>
          <DockIcon id='#certificates'>Certificates</DockIcon>
          <DockIcon id='#subscribe'>Subscribe</DockIcon>
          <DockIcon id='#contacts'>Contacts</DockIcon>
        </Dock>

    </>
  )
}

export default App