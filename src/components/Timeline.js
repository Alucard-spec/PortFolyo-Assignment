import React, { useEffect, useState } from 'react'
import {motion} from "framer-motion";
import EduCard from './EduCard';
import ExpCards from './ExpCards';

const Timeline = () => {

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
    <motion.div animate={{y:["200%","0%"],transition:{duration:1}}}  className='bg-[#ece7e1] -z-10 space-y-10 w-[100%] h-[100%] fixed top-0 right-0 '>

       
    </motion.div>
    <div className='p-10 z-10'>
    <motion.div  animate={{y:['-100%','0%'],opacity:['0%',"100%"]}} transition={{delay:1,duration:0.5}} className='lg:text-7xl text-4xl md:text-5xl font-ubuntu font-extrabold  '>Resume</motion.div> 
        <div>
        
        <motion.div animate={{x:['-100%','0%'],opacity:['0%',"100%"]}} transition={{delay:1,duration:0.8}} className='font-dancing lg:text-5xl md:text-4xl text-2xl  font-bold underline '> Education</motion.div> <br /><br />
          <div className='flex flex-initial flex-col md:flex-row flex-wrap'>  {data?.user.timeline.map((object)=>{
                return <EduCard datas={object}/>
            })}</div>
        </div>

        <motion.div animate={{x:['-100%','0%'],opacity:['0%',"100%"]}} transition={{delay:1,duration:0.8}} className='font-dancing lg:text-5xl md:text-4xl text-2xl  font-bold underline '> Experience</motion.div>
        <div>

        <br /><br />
        <div className='flex flex-initial flex-col md:flex-row flex-wrap'>  {data?.user.timeline.map((object)=>{
                return <ExpCards datas={object}/>
            })}</div>
        </div>

    </div>
    </div>
  )
}

export default Timeline