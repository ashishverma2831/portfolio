import React from 'react'
import { Dock, DockIcon } from '../magicui/dock'


const Contacts = () => {
  return (
    <>
      <section className='h-[600px] py-1 bg-blue-400'>
          <Dock className='flex gap-4'>
            <DockIcon className='hover:bg-stone-300/50 text-2xl'>
              <i className="fa-brands fa-instagram"></i>
            </DockIcon>
            <DockIcon className='hover:bg-stone-300/50 text-2xl'>
            <i className="fa-brands fa-linkedin"></i>
            </DockIcon>
            <DockIcon className='hover:bg-stone-300/50 text-2xl'>
            <i className="fa-brands fa-github"></i>
            </DockIcon>
            <DockIcon className='hover:bg-stone-300/50 text-2xl'>
            <i className="fa-brands fa-youtube"></i>
            </DockIcon>
          </Dock>
      </section>
    </>
  )
}

export default Contacts