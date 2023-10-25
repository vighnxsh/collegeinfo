import Link from 'next/link'
import React from 'react'
import { BiSearchAlt } from 'react-icons/bi'
import { IoArrowBackOutline } from 'react-icons/io5'

export default function JD() {
  return (
    <div>
      <div className=' ' >
           
           <div className='bg-blue-500 text-3xl p-5  font-bold text-white flex flex-row'>
         <h1 className='pr-2'>CollegeInfo</h1> <BiSearchAlt/>

      </div>
      <Link href='/thane' className='font-bold flex flex-row text-3xl p-1 pt-2 pl-5'> <IoArrowBackOutline/> </Link>
        
         <div className='pt-2 m-10 flex flex-col items-center '>
      
     

     
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a3/Ssjcoe-logo.png" alt="" className='w-70 h-35' />
      
      <h1 className='text-lg font-bold'>Shivajirao Jondhale College of Engineering </h1>
      
      <h1 className='text-xl'>Year of Foundation - 2010</h1>
     
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
            
            </div>
           
          
            </li>
          
        </ul>
      
        <p className='pt-5'><span className='font-bold text-lg pt-5'>Location : </span>Dombivli East Shilphata road near Sonarpada</p>

    </div>
    </div>
    </div>
   
  )
}
