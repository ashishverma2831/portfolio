import React from 'react'

const ProjectCard = ({project,index}) => {
  return (
    <>
       <div key={index} className=' bg-red-400 m-2 rounded-lg overflow-hidden hover:shadow-xl'>
            <img src={project.image} alt='Project' className='w-full h-[240px] object-cover' />
            <div className='p-2 bg-blue-300 flex flex-col gap-3'>
                <p className='text-lg font-semibold'>{project.title}</p>
                <p className='text-stone-500 text-sm'> {project.description} </p>
                <div className='flex flex-wrap gap-1'>
                    {/* <p className='bg-stone-300 text-center px-3 py-1.6 rounded-md w-fit'>nextjs</p> */}
                    {
                        project.techs.map((tech,index)=>{
                            return <p key={index} className='bg-stone-300 text-center px-3 py-1.6 rounded-md w-fit'>{tech}</p>
                        })
                    }
                </div>
                <div className='flex flex-wrap gap-2'>
                    <a href={project.liveLink} className='bg-slate-900 text-sm text-stone-300 px-2.5 flex items-center gap-2 py-1 rounded-md '><i className="fa-regular fa-paper-plane fa-sm"></i>Live</a>
                    <a href={project.sourceLink} className='bg-slate-900 text-sm text-stone-300 px-2.5 flex items-center gap-2 py-1 rounded-md '><i className="fa-brands fa-github"></i>Source</a>
                </div>
            </div>
       </div>
    </>
  )
}

export default ProjectCard