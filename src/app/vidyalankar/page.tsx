import React from 'react'
import { BiSearchAlt } from 'react-icons/bi'

export default function Vidyalankar() {
  return (
    <div>
    <div className=' ' >
         
         <div className='bg-blue-500 text-3xl p-5  font-bold text-white flex flex-row'>
       <h1 className='pr-2'>CollegeInfo</h1> <BiSearchAlt/>

    </div>
      
       <div className='pt-2 m-10 flex flex-col items-center '>
    
   

   
      <img src="https://vidyalankar.edu.in/wp-content/uploads/2014/03/VSIT-1-768x205.png" alt="" className='w-60 h-30' />
    
    <h1 className='text-lg font-bold'>Vidyalankar institute of technology</h1>
    
    <h1 className='text-xl'>Year of Foundation - 1999</h1>
   
      <ul>
        <li>
          <h1 className='font-bold text-2xl pt-20 pb-5'>Courses offered by College:</h1>

          <p>

          </p>
          
          <div className='text-lg font-bold  bg-slate-600 text-white p-5 rounded-xl'>
          <h1 className='py-2'>Computer Engineering: <span className='text-blue-200'>120 seats</span></h1>
          
          <h1 className='py-2'>Information Technology:  <span className='text-blue-200'>120 seats</span></h1>
          

          
          <h1 className='py-2'>Biomedical Engineering: <span className='text-blue-200'>30 seats</span></h1>
          
      
          <h1 className='py-2'>Electronics and Telecommunication Engineering: <span className='text-blue-200'>60 seats</span></h1>
          
          <h1 className='py-2'>Electronics and Computer Science: <span className='text-blue-200'>60 seats</span></h1>
          
          
          </div>
         
        
          </li>
        
      </ul>
      <a className='font-bold p-4 text-blue-700' href="https://vit.edu.in/">Click here to visit Official College Website </a>
    
      <p className='pt-5'><span className='font-bold text-lg pt-5'>Location : </span> VIDYALANKAR INSTITUTE OF TECHNOLOGY, Sangam Nagar, Mumbai, Maharashtra 400037</p>

  </div>
  </div>
  </div>
  )
}
