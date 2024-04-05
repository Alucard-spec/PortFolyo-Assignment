import React from 'react'
import {motion} from "framer-motion";

const SkillCard = ({skill}) => {
    
   
  return (
    <motion.div animate={{opacity:["0%","100%"],transition:{duration:1,delay:1}}} className='w-[200px] border-t-2 border-b-2 border-black relative'>
    
    <div className='text-3xl font-dancing font-bold '>{skill?.name}</div> 
    <img src={`${skill?.image.url}`} className='object-cover' alt="" />
    <div className='absolute bottom-0 font-bold'> {skill?.percentage} %</div>
    
    </motion.div>
  )
}

export default SkillCard