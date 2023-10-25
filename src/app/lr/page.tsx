import React from 'react'
import { BiSearchAlt } from 'react-icons/bi'

export default function LR() {
  return (
    <div>
      <div className=' ' >
           
           <div className='bg-blue-500 text-3xl p-5  font-bold text-white flex flex-row'>
         <h1 className='pr-2'>CollegeInfo</h1> <BiSearchAlt/>

      </div>
        
         <div className='pt-2 m-10 flex flex-col items-center '>
      
     

     
        <img src="https://slrtce.in/wp-content/uploads/2020/02/SLRTC_Engineering_Logo-1024x246-1.png" alt="" className='w-70 h-35' />
      
      <h1 className='text-xl font-bold'> </h1>
      
      <h1 className='text-xl'>Year of Foundation - 2010</h1>
     
        <ul>
          <li>
            <h1 className='font-bold text-2xl pt-20 pb-5'>Courses offered by College:</h1>

            <p>

            </p>
            
            <div className='text-lg font-bold  bg-slate-600 text-white p-5 rounded-xl'>
            <h1 className='py-2'>Computer Engineering: <span className='text-blue-200'>90 seats</span></h1>
            
            <h1 className='py-2'>Information Technology:  <span className='text-blue-200'>180 seats</span></h1>
            
            {/* <h1 className='py-2'>Artificial Intelligence and Data Science: <span className='text-blue-200'>120 seats</span></h1> */}
            
            
            <h1 className='py-2'>Civil Engineering: <span className='text-blue-200'>60 seats</span></h1>
            
            <h1 className='py-2'>Electronics and Computer Science: <span className='text-blue-200'>60 seats</span></h1>
           
            <h1 className='py-2'>Electronics and Telecommunication: <span className='text-blue-200'>60 seats</span></h1>
            
            <h1 className='py-2'>Mechanical Engineering: <span className='text-blue-200'>30 seats</span></h1>
            
            </div>
           
          
            </li>
          
        </ul>
        <a className='font-bold p-4 text-blue-700' href="https://slrtce.in/">Click here to visit Official College Website </a>

        <p><span className='font-bold text-lg'>Location : </span>Kanakia Rd, Kanakia Park, Mira Road East, Mira Bhayandar, Maharashtra 401107</p>

    </div>
    </div>
    </div>
   
  )
}
