import React, { useEffect, useState } from 'react'
import {motion} from "framer-motion";
import TestimonialSlide from './TestimonialSlide';


const Testimonials = () => {
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
       <div className='p-10 space-y-10 '> 
       <motion.div  animate={{y:['-100%','0%'],opacity:['0%',"100%"]}} transition={{delay:1,duration:0.5}} className='lg:text-7xl text-4xl md:text-5xl font-ubuntu font-extrabold text-center '>Testimonials</motion.div> 
       <TestimonialSlide items={data?.user.testimonials} interval={4000}/>
       </div>
       </div>
  )
}

export default Testimonials