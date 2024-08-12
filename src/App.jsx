import React from 'react'
import { Dock, DockIcon } from './components/magicui/dock'
import { Link } from 'react-router-dom'

const App = () => {
  return (
    <>
      <section className='md:max-w-screen-md mx-auto h-[600px] bg-red-400' id='about'>About</section>
      <section className='md:max-w-screen-md mx-auto h-[600px] bg-green-400' id='hero'>Hero</section>
      <section className='md:max-w-screen-md mx-auto h-[600px] bg-yellow-400' id='education'>Education</section>
      <section className='md:max-w-screen-md mx-auto h-[600px] bg-blue-400' id='projects'>Projects</section>
      <section className='md:max-w-screen-md mx-auto h-[600px] bg-orange-400' id='skills'>Skills</section>
      <section className='md:max-w-screen-md mx-auto h-[600px] bg-purple-400' id='certificates'>Certificates</section>
      <section className='md:max-w-screen-md mx-auto h-[600px] bg-sky-400' id='subscribe'>Subscribe</section>
      <section className='md:max-w-screen-md mx-auto h-[600px] bg-pink-400' id='contacts'>Contacts</section>

        <Dock className='rounded-full shadow-2xl sticky bottom-8 flex justify-around'>
          <DockIcon className='hover:bg-stone-300/50'>
            <a href='#about' title='Home'><i className="fa-solid fa-house fa-lg"></i></a>
          </DockIcon>
          <DockIcon className='hover:bg-stone-300/50'>
            <a href='#education' title='Education'><i className="fa-solid fa-laptop-file fa-lg"></i></a>
          </DockIcon>
          <DockIcon className='hover:bg-stone-300/50' >
            <a href='#projects' title='Projects'><i className="fa-solid fa-cube fa-lg"></i></a>
          </DockIcon>
          <DockIcon className='hover:bg-stone-300/50' >
            <a href='#skills' title='Skills'><i className="fa-solid fa-tools fa-lg"></i></a>
          </DockIcon>
          <DockIcon className='hover:bg-stone-300/50'>
            <a href='#certificates' title='Certificates'><i className="fa-solid fa-certificate fa-lg"></i></a>
          </DockIcon>
          <span className='h-full w-[1.6px] bg-stone-300/50'></span>
          <DockIcon className='hover:bg-stone-300/50'>
            <a href='https://github.com/ashishverma2831' title='GitHub'><i className="fa-brands fa-github fa-lg"></i></a>
          </DockIcon>
          <DockIcon className='hover:bg-stone-300/50'>
            <a href='https://www.linkedin.com/in/ashishverma2816/' title='LinkedIn'><i className="fa-brands fa-linkedin-in fa-lg"></i></a>
          </DockIcon>
          <DockIcon className='hover:bg-stone-300/50'>
            <a href='https://www.instagram.com/ashishverma2342/' title='Instagram'><i className="fa-brands fa-instagram fa-lg"></i></a>
          </DockIcon>
        </Dock>

    </>
  )
}

export default App