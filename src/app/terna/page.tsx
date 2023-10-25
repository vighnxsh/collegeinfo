import React from 'react'
import { BiSearchAlt } from 'react-icons/bi'

export default function Terna() {
  return (
    <div>
      <div className=' ' >
           
           <div className='bg-blue-500 text-3xl p-5  font-bold text-white flex flex-row'>
         <h1 className='pr-2'>CollegeInfo</h1> <BiSearchAlt/>

      </div>
        
         <div className='pt-2 m-10 flex flex-col items-center '>
      
     

     
        <img src="https://almashines.s3.dualstack.ap-southeast-1.amazonaws.com/assets/images/institutes/logo/170x170/171.jpg" alt="" className='w-40 h-35' />
      
      <h1 className='text-lg font-bold'>Terna College of Engineering</h1>
      
      <h1 className='text-xl'>Year of Foundation - 1991</h1>
     
        <ul>
          <li>
            <h1 className='font-bold text-2xl pt-20 pb-5'>Courses offered by College:</h1>

            <p>

            </p>
            
            <div className='text-lg font-bold  bg-slate-600 text-white p-5 rounded-xl'>
            <h1 className='py-2'>Computer Engineering: <span className='text-blue-200'>90 seats</span></h1>
            
            <h1 className='py-2'>Information Technology:  <span className='text-blue-200'>180 seats</span></h1>
            
  
            
            <h1 className='py-2'>Civil Engineering: <span className='text-blue-200'>60 seats</span></h1>
            
        
            <h1 className='py-2'>Mechanical Engineering: <span className='text-blue-200'>30 seats</span></h1>
            
            <h1 className='py-2'>Electronics nd Telecommunication: <span className='text-blue-200'>30 seats</span></h1>
            
            
            </div>
           
          
            </li>
          
        </ul>
        <a className='font-bold p-4 text-blue-700' href="https://ternaengg.ac.in/">Click here to visit Official College Website </a>
      
        <p className='pt-5'><span className='font-bold text-lg pt-5'>Location : </span>Plot No 12, Sector-22 Opp. Nerul Railway Station W, Phase II, Nerul, Navi Mumbai, Maharashtra 400706</p>

    </div>
    </div>
    </div>
   
  )
}
