import React from 'react';
import {motion} from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (

   
     <div >

    <motion.div animate={{y:["100%","0%"],transition:{duration:1}}}  className=' w-[100%] h-[100%]   fixed top-0 right-0    bg-[#ece7e1] '>

    </motion.div>
    <div className='font-bold p-5 flex font-dancing flex-col text-center md:flex-row lg:text-8xl md:text-7xl sm:text-6xl  text-5xl space-y-5 md:space-y-0 mx-auto'>
            <motion.div animate={{y:["100%","0%"],transition:{duration:0.8,delay:0.2}}} className='flex  flex-col gap-4 md:gap-7 md:w-[50%] md:text-center md:justify-evenly md:h-screen'>
        <div ><Link to="/about"><span  className='hover:italic cursor-pointer hover:tracking-wider transition-all'> About</span></Link></div>
        <div ><Link to="/projects"> <span className='hover:italic cursor-pointer hover:tracking-wider transition-all'>Projects</span></Link></div>
        <div ><Link to="/timeline"><span className='hover:italic cursor-pointer hover:tracking-wider transition-all'>Timeline</span></Link></div>
      </motion.div>
      <motion.div animate={{y:["100%","0%"],transition:{duration:0.8,delay:0.2}}} className='flex flex-col gap-4 md:h-screen md:gap-7 md:w-[50%] md:text-center   md:justify-evenly'>
        <div ><Link to="/services"><span className='hover:italic cursor-pointer hover:tracking-wider transition-all'>Services</span></Link> </div>
        <div ><Link to="/skills"><span className='hover:italic cursor-pointer hover:tracking-wider transition-all'>Skills</span></Link></div>
        <div ><Link to="/testimonials"> <span className='hover:italic cursor-pointer hover:tracking-wider transition-all'>Testimonial</span></Link> </div>
      </motion.div>
    </div>
    

    </div>
  )
}

export default Hero