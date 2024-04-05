import React from 'react';
import {motion} from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (

   
     

    <motion.div animate={{y:["100%","0%"],transition:{duration:0.8}}}  className='flex font-dancing flex-col md:flex-row lg:text-9xl justify-evenly md:text-7xl text-4xl space-y-10 md:space-y-0 mx-auto w-fit  md:w-full md:h-screen  font-bold bg-[#ece7e1] '>
      <motion.div animate={{y:["100%","0%"],transition:{duration:0.8,delay:0.2}}} className='flex flex-col gap-4 md:gap-7 justify-evenly'>
        <div  className='hover:italic cursor-pointer hover:tracking-wider transition-all'><Link to="/about">About</Link></div>
        <div className='hover:italic cursor-pointer hover:tracking-wider transition-all'>Projects</div>
        <div className='hover:italic cursor-pointer hover:tracking-wider transition-all'><Link to="/timeline">Timeline</Link></div>
      </motion.div>
      <motion.div animate={{y:["100%","0%"],transition:{duration:0.8,delay:0.2}}} className='flex flex-col gap-4 md:gap-7  justify-evenly'>
        <div className='hover:italic cursor-pointer hover:tracking-wider transition-all'>Services</div>
        <div className='hover:italic cursor-pointer hover:tracking-wider transition-all'>Skills</div>
        <div className='hover:italic cursor-pointer hover:tracking-wider transition-all'>Testimonial</div>
      </motion.div>
    </motion.div>
    

    
  )
}

export default Hero