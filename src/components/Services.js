import React, { useEffect, useState } from 'react'
import {motion} from "framer-motion";
import ServiceCard from './ServiceCard';

const Services = () => {
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
    <div> <motion.div animate={{y:["100%","0%"],transition:{duration:1}}}  className=' w-[100%] h-[100%]   fixed top-0 right-0 -z-10   bg-[#ece7e1] '>

    </motion.div>
    <div className='p-10 space-y-10 '>
    <motion.div  animate={{y:['-100%','0%'],opacity:['0%',"100%"]}} transition={{delay:1,duration:0.5}} className='lg:text-7xl text-4xl md:text-5xl font-ubuntu font-extrabold  '>Services</motion.div> 
    <div className='flex gap-24 flex-wrap'>
        {data?.user.services.map((object)=>{
            return <ServiceCard service={object}/>
        })}
    </div>
    </div>
    </div>
  )
}

export default Services