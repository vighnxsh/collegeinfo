import React from 'react'
import { BiSearchAlt } from 'react-icons/bi'

export default function AP() {
  return (
    <div>
      <div className=' ' >
           
           <div className='bg-blue-500 text-3xl p-5  font-bold text-white flex flex-row'>
         <h1 className='pr-2'>CollegeInfo</h1> <BiSearchAlt/>

      </div>
        
         <div className='pt-2 m-10 flex flex-col items-center '>
      
     

     
        <img src="https://lms-kjsce.somaiya.edu/pluginfile.php/1/theme_essential/logo/1658382972/engg-logo.png" alt="" className='w-30 h-20' />
      
      <h1 className='text-xl font-bold'>K.J Somaiya College of Engineering</h1>
      
      <h1 className='text-xl'>Year of Foundation - 1959</h1>
     
        <ul>
          <li>
            <h1 className='font-bold text-2xl pt-20 pb-5'>Courses offered by College:</h1>

            <p>

            </p>
            
            <div className='text-lg font-bold  bg-slate-600 text-white p-5 rounded-xl'>
            <h1 className='py-2'>Computer Engineering: <span className='text-blue-200'>120 seats</span></h1>
            
            <h1 className='py-2'>Information Technology:  <span className='text-blue-200'>120 seats</span></h1>
            
            <h1 className='py-2'>Artificial Intelligence and Data Science: <span className='text-blue-200'>120 seats</span></h1>
            
            
            <h1 className='py-2'>Electronics and Telecommunication: <span className='text-blue-200'>60 seats</span></h1>
            
            <h1 className='py-2'>Computer and Communication Engineering: <span className='text-blue-200'>60 seats</span></h1>
            
            <h1 className='py-2'>Mechanical Engineering: <span className='text-blue-200'>60 seats</span></h1>
            </div>
           
          
            </li>
          
        </ul>
        <a className='font-bold p-4 text-blue-700' href="https://kjsim.somaiya.edu/en/">Click here to visit Official College Website </a>

        <p><span className='font-bold text-lg'>Location : </span>Vidyanagar, Vidya Vihar East, Vidyavihar, Mumbai, Maharashtra 400077</p>

    </div>
    </div>
    </div>
  )
}
