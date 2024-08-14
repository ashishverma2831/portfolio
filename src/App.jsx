import React from 'react'
import { Dock, DockIcon } from './components/magicui/dock'
import { Link } from 'react-router-dom'
import IconCloud from './components/magicui/icon-cloud'

const App = () => {

  const slugs = [
    "typescript",
    "javascript",
    "dart",
    "java",
    "react",
    "flutter",
    "android",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
  ];

  return (
    <>
      <section className='md:max-w-screen-md mx-auto h-[600px] bg-red-400' id='about'>About</section>
      <section className='md:max-w-screen-md mx-auto h-[600px] bg-green-400' id='hero'>Hero</section>
      <section className='md:max-w-screen-md mx-auto h-[600px] bg-yellow-400' id='education'>Education</section>
      <section className='md:max-w-screen-md mx-auto h-[600px] bg-blue-400' id='projects'>Projects</section>
      <section className='md:max-w-screen-md mx-auto h-[600px] bg-orange-400' id='skills'>
        <IconCloud iconSlugs={slugs} />
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