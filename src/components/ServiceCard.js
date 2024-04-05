import React from 'react'
import {motion} from "framer-motion";


const ServiceCard = ({service}) => {
  return (

<motion.div animate={{opacity:["0%","100%"],transition:{duration:1,delay:1}}} className={service?.enabled===false?'hidden':'font-ubuntu flex flex-col gap-4 md:flex-row  md:items-center border-black border p-2 rounded-lg'}>
    <div>    <motion.div animate={{opacity:["0%","100%"],transition:{duration:1,delay:1}}} className='w-[200px] border-t-2 border-b-2 border-black relative'>

    <motion.div animate={{opacity:["0%","100%"],transition:{duration:1,delay:1}}} className='text-2xl  font-bold '>{service?.name}</motion.div> 
    <img src={`${service?.image.url}`} className='object-cover' alt="" />
    
   
    
    
    
    </motion.div>
    <motion.div animate={{opacity:["0%","100%"],transition:{duration:1,delay:1}}} className='font-bold text-xl '> {service?.charge}</motion.div></div>

    <div>
    <motion.div animate={{opacity:["0%","100%"],transition:{duration:1,delay:1}}} className='w-[200px] border-t-2 border-b-2 border-black relative'>

<motion.div animate={{opacity:["0%","100%"],transition:{duration:1,delay:1}}} className='text-2xl  font-bold '>Description</motion.div> 
{service?.desc}





</motion.div>

    </div>
    </motion.div>
  )
}

export default ServiceCard