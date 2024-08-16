import React from 'react'
import { Dock, DockIcon } from './components/magicui/dock'
import { Link } from 'react-router-dom'
import IconCloud from './components/magicui/icon-cloud'
import TypingAnimation from './components/magicui/typing-animation'

const App = () => {

  const slugs = [
    "java",
    "javascript",
    "react",
    "html5",
    "css3",
    "nodedotjs",
    "mongodb",
    "androidstudio",
    "tailwindcss",
    "bootstrap",
    "redux",
    "vite",
    "nextdotjs",
    "express",
    "firebase",
    "vercel",
    "render",
    "git",
    "github",
    "visualstudiocode",
    "figma",
  ];

  return (
    <>
      <section className='md:max-w-screen-md mx-auto h-[600px] bg-red-400' id='about'>About</section>
      <section className='md:max-w-screen-md mx-auto h-[600px] bg-green-400' id='hero'>Hero</section>
      <section className='md:max-w-screen-md mx-auto h-[600px] bg-yellow-400' id='education'>Education</section>
      <section className='md:max-w-screen-md mx-auto h-[600px] bg-blue-400' id='projects'>Projects</section>
      <section className='md:max-w-screen-md mx-auto h-[600px] py-8' id='skills'>
        <TypingAnimation
          className="text-4xl font-bold text-black dark:text-white"
          text="Tech Stack"
        />
        <section className='flex justify-center items-center gap-4'>
          <div className='w-2/5 flex-row flex flex-wrap py-4 gap-2'>
            {
              slugs.map((slug, index) => {
                return <button key={index} className='bg-slate-900 hover:bg-slate-800 shadow-lg text-sm py-1.5 px-4 rounded-full text-white capitalize'>{slug}</button>
              })
            }
          </div>
          <div className='w-3/5'>
            <IconCloud iconSlugs={slugs} />
          </div>
        </section>
      </section>
      <section className='md:max-w-screen-md mx-auto h-[600px] bg-purple-400' id='certificates'>Certificates</section>
      <section className='md:max-w-screen-md mx-auto h-[600px] bg-sky-400' id='subscribe'>Subscribe</section>
      <section className='md:max-w-screen-md mx-auto h-[600px] bg-pink-400' id='contacts'>Contacts</section>

      <Dock className='rounded-full shadow-2xl sticky bottom-8 flex justify-around'>
        <DockIcon className='hover:bg-stone-300/50'>
          <a className='flex justify-center items-center w-full h-full' href='/' title='Home'><i className="fa-solid fa-house fa-lg"></i></a>
        </DockIcon>
        <DockIcon className='hover:bg-stone-300/50'>
          <a className='flex justify-center items-center w-full h-full' href='#education' title='Education'><i className="fa-solid fa-laptop-file fa-lg"></i></a>
        </DockIcon>
        <DockIcon className='hover:bg-stone-300/50' >
          <a className='flex justify-center items-center w-full h-full' href='#projects' title='Projects'><i className="fa-solid fa-cube fa-lg"></i></a>
        </DockIcon>
        <DockIcon className='hover:bg-stone-300/50' >
          <a className='flex justify-center items-center w-full h-full' href='#skills' title='Skills'><i className="fa-solid fa-tools fa-lg"></i></a>
        </DockIcon>
        <DockIcon className='hover:bg-stone-300/50'>
          <a className='flex justify-center items-center w-full h-full' href='#certificates' title='Certificates'><i className="fa-solid fa-certificate fa-lg"></i></a>
        </DockIcon>
        <span className='h-full w-[1.6px] bg-slate-200'></span>
        <DockIcon className='hover:bg-stone-300/50'>
          <a target='_blank' className='flex justify-center items-center w-full h-full' href='https://github.com/ashishverma2831' title='GitHub'><i className="fa-brands fa-github fa-lg"></i></a>
        </DockIcon>
        <DockIcon className='hover:bg-stone-300/50'>
          <a target='_blank' className='flex justify-center items-center w-full h-full' href='https://www.linkedin.com/in/ashishverma2816/' title='LinkedIn'><i className="fa-brands fa-linkedin-in fa-lg"></i></a>
        </DockIcon>
        <DockIcon className='hover:bg-stone-300/50'>
          <a target='_blank' className='flex justify-center items-center w-full h-full' href='https://www.instagram.com/ashishverma2342/' title='Instagram'><i className="fa-brands fa-instagram fa-lg"></i></a>
        </DockIcon>
      </Dock>

    </>
  )
}

export default App