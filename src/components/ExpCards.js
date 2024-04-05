import React from 'react';
import {motion} from "framer-motion";

const Card = ({datas}) => {
  return (
    <motion.div animate={{opacity:['0%','100%']}} transition={{delay:1,duration:0.5}} className={datas?.enabled===false?"hidden":datas?.forEducation===true?"hidden":"font-ubuntu z-10"}>
        <div className='max-w-[400px] md:min-w-[300px] lg:min-w-[400px] md:p-3 p-1 my-2 md:m-3 border-t-2 border-black border-b-2 md:text-xl space-y-3'>

            
 
        <div className='font-bold text-red-500 '>{datas?.company_name}</div>
        <div className='text-sm md:text-base'> <span className='font-semibold md:text-xl'>Role - </span>{datas?.jobTitle}</div>
        <div className='text-sm md:text-base'> {datas?.startDate.substring(0,10)} <span className='font-bold '> to </span> {datas?.endDate.substring(0,10)}</div>
        <div className={datas?.summary.length===0?"hidden":'font-semibold '}> Summary</div>
        <div className='text-sm md:text-base'> {datas?.summary}</div>
        <div className='font-semibold'> What i did </div>
        <div className='text-sm md:text-base'><pre className='text-wrap'>{datas?.bulletPoints} </pre></div>

        <div className='text-sm md:text-base' ><span className='font-semibold md:text-xl'>Location - </span>{datas?.jobLocation}</div>
        
        </div>
        <hr />
        </motion.div>
  )
}

export default Card