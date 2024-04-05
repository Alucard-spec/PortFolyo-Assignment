import React from 'react';
import {motion} from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (

   
     

    <motion.div animate={{y:["100%","0%"],transition:{duration:0.8}}}  className='flex  font-dancing flex-col md:flex-row lg:text-8xl md:text-7xl sm:text-6xl  text-5xl space-y-5 md:space-y-0 mx-auto w-[100%] h-[100%] text-center  fixed top-0 right-0   font-bold bg-[#ece7e1] p-5'>
      <motion.div animate={{y:["100%","0%"],transition:{duration:0.8,delay:0.2}}} className='flex  flex-col gap-4 md:gap-7 md:w-[50%] md:text-center md:justify-evenly'>
        <div ><Link to="/about"><span  className='hover:italic cursor-pointer hover:tracking-wider transition-all'> About</span></Link></div>
        <div ><span className='hover:italic cursor-pointer hover:tracking-wider transition-all'>Projects</span></div>
        <div ><Link to="/timeline"><span className='hover:italic cursor-pointer hover:tracking-wider transition-all'>Timeline</span></Link></div>
      </motion.div>
      <motion.div animate={{y:["100%","0%"],transition:{duration:0.8,delay:0.2}}} className='flex flex-col gap-4 md:gap-7 md:w-[50%] md:text-center   md:justify-evenly'>
        <div ><span className='hover:italic cursor-pointer hover:tracking-wider transition-all'>Services</span> </div>
        <div ><span className='hover:italic cursor-pointer hover:tracking-wider transition-all'>Skills</span></div>
        <div > <span className='hover:italic cursor-pointer hover:tracking-wider transition-all'>Testimonial</span></div>
      </motion.div>
    </motion.div>
    

    
  )
}

export default Hero