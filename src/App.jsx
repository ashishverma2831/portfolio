import React from 'react'
import { Dock, DockIcon } from './components/magicui/dock'
import { Link } from 'react-router-dom'
import IconCloud from './components/magicui/icon-cloud'
import TypingAnimation from './components/magicui/typing-animation'
import ProjectCard from './components/ui/ProjectCard'
import BlurIn from './components/magicui/blur-in'
import { projects, education } from './Data/data'
import { skills } from './Data/data'

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
      <section className='md:max-w-screen-md mx-auto py-6' id='education'>
        <BlurIn word='Education' />
        <div className='my-4 py-6 flex flex-col gap-8'>
          {
            education.map((edu, index) => {
              return (
                <div key={index} className='flex items-center justify-between px-4'>
                  <div className='w-10/12' >
                    <p className='font-semibold text-gray-800 text-xl'>{edu.title}</p>
                    <p className='text-stone-700'>{edu.institution}</p>
                  </div>
                  <div className='w-2/12 flex flex-col justify-between items-end'>
                    <p className='text-stone-800 text-lg'>{edu.marks}</p>
                    <p className='text-stone-800 text-sm'>{edu.duration}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
      </section>
      <section className='md:max-w-screen-xl mx-auto' id='projects'>
        <BlurIn word='Projects' />
        <div className='py-8 px-4 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
          {
            projects.map((project, projectIndex) => {
              return <ProjectCard project={project} index={projectIndex + 100} />
            })
          }
        </div>
      </section>
      <section className='md:max-w-screen-md mx-auto' id='skills'>
        <BlurIn word='Skills' />
        <section className='flex flex-col md:flex-row justify-center py-8 items-center gap-4'>
          <div className='md:w-2/5 p-4 w-full flex-row flex flex-wrap py-4 gap-2'>
            {
              skills.map((slug, index) => {
                return <button key={index} className='bg-slate-900 hover:bg-slate-800 shadow-lg text-sm py-1.5 px-4 rounded-full text-white capitalize'>{slug}</button>
              })
            }
          </div>
          <div className='md:w-3/5 w-full px-4'>
            <IconCloud iconSlugs={slugs} />
          </div>
        </section>
      </section>
      <section className='md:max-w-screen-md mx-auto h-[600px] bg-purple-400' id='certificates'>Certificates</section>
      <section className='md:max-w-screen-md mx-auto h-[600px] bg-sky-400' id='subscribe'>Subscribe</section>
      <section className='md:max-w-screen-md mx-auto h-[600px] bg-pink-400' id='contacts'>Contacts</section>

      <Dock className='rounded-full w-[420px] shadow-2xl sticky bottom-8 flex justify-around'>
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