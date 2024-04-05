import React from "react"
import {motion} from "framer-motion";

const ProjectCard = ({project}) => {
  return (
    <motion.div animate={{opacity:["0%","100%"],transition:{duration:1,delay:1}}} className={project?.enabled===false?'hidden':'font-ubuntu flex flex-col gap-4 md:flex-row  md:items-center border-black w-fit  border p-2 rounded-lg'}>
    <div>    <motion.div animate={{opacity:["0%","100%"],transition:{duration:1,delay:1}}} className='w-fit bg-red-200 max-w-96 border-t-2 border-b-2 border-black relative '>

    <motion.div animate={{opacity:["0%","100%"],transition:{duration:1,delay:1}}} className='text-2xl  font-bold '>{project?.title}</motion.div> 
    <img src={`${project?.image.url}`} className='object-cover' alt="" />
    
   
    
    
    
    </motion.div>
    <motion.div animate={{opacity:["0%","100%"],transition:{duration:1,delay:1}}} className='font-bold text-xl '> {project?.liveurl}</motion.div></div>

    <div>
    <motion.div animate={{opacity:["0%","100%"],transition:{duration:1,delay:1}}} className='w-[200px] border-t-2 border-b-2 border-black relative'>

<motion.div animate={{opacity:["0%","100%"],transition:{duration:1,delay:1}}} className='text-2xl  font-bold '>Description</motion.div> 
{project?.description}





</motion.div>

    </div>
    </motion.div>
  )
}

export default ProjectCard