import React from 'react'

const ProjectCard = ({project,index}) => {
  return (
    <>
       <div key={index+100} className='border m-2 rounded-lg overflow-hidden hover:shadow-xl'>
            <img src={project.image} alt='Project' className='w-full h-[240px] object-cover' />
            <div className='p-2 h-full flex flex-col gap-3'>
                <p className='text-lg font-semibold'>{project.title}</p>
                <p className='text-stone-400 text-sm'> {project.description} </p>
                <div className='flex flex-wrap gap-1'>
                    {/* <p className='bg-stone-300 text-center px-3 py-1.6 rounded-md w-fit'>nextjs</p> */}
                    {
                        project.techs.map((tech,indices)=>{
                            return <p key={indices+1000} className='bg-stone-200/50 text-stone-500 text-center px-3 py-1.6 rounded-md w-fit'>{tech}</p>
                        })
                    }
                </div>
                <div className='flex flex-wrap gap-2'>
                    <a href={project.liveLink} target='_blank' className='bg-slate-900 text-sm text-stone-100 px-2.5 flex items-center gap-2 py-1 rounded-md '><i className="fa-regular fa-paper-plane fa-sm"></i>Live</a>
                    <a href={project.sourceLink} target='_blank' className='bg-slate-900 text-sm text-stone-100 px-2.5 flex items-center gap-2 py-1 rounded-md '><i className="fa-brands fa-github"></i>Source</a>
                </div>
            </div>
       </div>
    </>
  )
}

export default ProjectCard