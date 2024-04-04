import React, { useEffect, useState } from 'react'



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
    <div className='bg-[#ece7e1]'>{ data?.user.about.name}
    </div>
  )
}

export default About