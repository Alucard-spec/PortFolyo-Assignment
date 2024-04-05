import React, { useState, useEffect } from 'react';
import {motion} from "framer-motion";

const TestimonialSlide = ({items,interval=4000}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, interval);

    return () => {
      clearInterval(timer);
    };
  }, [items, interval]);
  return (
    <motion.div animate={{opacity:["0%","100%"],transition:{duration:1,delay:1}}} className="relative w-full h-full">
      {items?.map((item, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className='flex flex-col items-center md:flex-row md:justify-evenly space-y-9'>
            <div >
            <div className='w-80'><img src={item.image.url} alt="" /></div>
            <div className='font-ubuntu font-bold text-2xl text-center'>{item.name}</div></div>
            <div className='w-80  text-center'>
                <div className='text-2xl  font-ubuntu font-bold '>Review</div>
                <div className='text-xl font-semibold font-ubuntu'>
                    {item?.review}
                </div>
            </div>
          </div>
        </div>
      ))}
    </motion.div>
  )
}

export default TestimonialSlide