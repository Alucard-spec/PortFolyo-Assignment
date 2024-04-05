import React, { useEffect, useState } from 'react'
import {motion} from "framer-motion";


const About = () => {
    const [data,setData] = useState();
    
    const fetchData=async ( )=>{
        try{
            const fetched= await fetch("https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae")
            let datafetched= await fetched.json();
            setData(datafetched);
        }
        catch(err){
            console.error(err);
        }
    }
    useEffect(()=>{
        fetchData()},[]);
    
  return (
    <div>
    <motion.div animate={{y:["200%","0%"],transition:{duration:1}}}  className='bg-[#ece7e1] w-[100%] h-[100%] -z-10 fixed top-0 right-0 '>
       

       </motion.div>
        <div className=' p-10 space-y-10 z-10'>
        
        <div className='flex justify-evenly items-center z-10'>
        <div className='lg:text-5xl text-2xl md:text-3xl z-10 font-dancing w-[50%] lg:w-[45%]'><motion.div  animate={{y:['-100%','0%'],opacity:['0%',"100%"]}} transition={{delay:1,duration:0.5}} className='lg:text-7xl text-4xl md:text-5xl font-ubuntu font-extrabold  '>About</motion.div> <br /><motion.div animate={{opacity:['0%','100%']}} transition={{duration:0.5,delay:1}} >Hey there!! I am  <span className='text-red-500 font-bold underline'>{ data?.user.about.name}</span>.  A {data?.user.about.title} <span className='font-light italic lg:text-4xl text-xl md:text-2xl  '> <br /> {data?.user.about.subTitle} </span></motion.div><motion.div animate={{opacity:['0%','100%']}} transition={{duration:0.5,delay:1}}  className=' py-4 hidden sm:block font-ubuntu  sm:text-lg lg:text-xl '>{data?.user.about.description}</motion.div></div>
         
         <motion.div initial={{scale:0}} animate={{scale:1}} transition={{delay:1,duration:0.3}} className=' z-10 overflow-hidden items-baseline'>
         <img src={data?.user.about.avatar.url} className='h-40 z-10 object-contain  md:w-[210px] md:h-[280px] sm:w-[180px] sm:h-[240px] lg:w-[270] lg:h-[360px] ' alt="" />
         </motion.div>
         
         </div>
         <motion.div animate={{opacity:['0%','100%']}} transition={{duration:0.8,delay:1}}  className='z-10 sm:hidden font-ubuntu sm:text-xl lg:text-2xl '>{data?.user.about.description}</motion.div>
 
         <div className='z-10 font-dancing text-sm lg:text-3xl md:text-2xl flex flex-col sm:flex-row w-fit justify-between md:w-[70%] mx-auto gap-2'><motion.div initial={{scale:0}} animate={{scale:1}} transition={{delay:1,duration:0.3}} className='border-black border-2 text-center lg:border-4 rounded-xl z-10 p-[2px] md:p-1 lg:p-2  '>Worked on <span className='text-red-500 '>{data?.user.about.some_total}</span> projects </motion.div> <motion.div initial={{scale:0}} animate={{scale:1}} transition={{delay:1.2,duration:0.3}} className='border-black z-10 border-2 text-center lg:border-4 rounded-xl md:p-1 lg:p-2 p-[2px] '> Have <span className='text-red-500 font-bold'>{data?.user.about.exp_year}</span> years of experience </motion.div> </div>
 
         <motion.div animate={{opacity:['0%','100%']}} transition={{duration:0.8,delay:1.2}} className='lg:text-5xl z-10 md:text-3xl text-xl font-extrabold font-dancing w-fit mx-auto '> "{data?.user.about.quote}"</motion.div>
         </div>
         </div>
    
  )
}

export default About