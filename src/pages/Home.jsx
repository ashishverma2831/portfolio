import About from '@/components/ui/About'
import Certificates from '@/components/ui/Certificates'
import Contacts from '@/components/ui/Contacts'
import Education from '@/components/ui/Education'
import Hero from '@/components/ui/Hero'
import Projects from '@/components/ui/Projects'
import Skills from '@/components/ui/Skills'
import Subscribe from '@/components/ui/Subscribe'
import React from 'react'

const Home = () => {
  return (
    <>
      <About />
      <Education />
      <Hero />
      <Projects />
      <Skills />
      <Certificates />
      <Subscribe />
      <Contacts />
    </>
  )
}

export default Home