import Link from 'next/link'
import React from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import {BiSearchAlt} from 'react-icons/bi'
import {IoArrowBackOutline} from 'react-icons/io5'

export default function Nhitm() {
  return (
    <div className=' ' >
           
           <div className='bg-blue-500 text-3xl p-5  font-bold text-white flex flex-row'>
         <h1 className='pr-2'>CollegeInfo</h1> <BiSearchAlt/>

      </div>

      <div>
      <Link href='/thane' className='font-bold flex flex-row text-3xl p-1 pt-2 pl-5'> <IoArrowBackOutline/> </Link>
      </div>
        
         <div className='pt-2 m-10 flex flex-col items-center '>
      
     

     
        <img src="https://exam.infomaticaacademy.com/Content/images/partners/nhitm_logo.png" alt="" className='w-20 h-20' />
      
      <h1 className='text-xl font-bold'>New Horizon Institue of Technology</h1>
      
      <h1 className='text-xl'>Year of Foundation - 2014</h1>
     
        <ul>
          <li>
            <h1 className='font-bold text-2xl pt-20 pb-5'>Courses offered by College:</h1>

            <p>

            </p>
            
            <div className='text-lg font-bold  bg-slate-600 text-white p-5 rounded-xl'>
            <h1 className='py-2'>Computer Engineering: <span className='text-blue-200'>120 seats</span></h1>
            
            <h1 className='py-2'>Computer Science and Design:  <span className='text-blue-200'>60 seats</span></h1>
            
            <h1 className='py-2'>Artificial Intelligence and Data Science: <span className='text-blue-200'>60 seats</span></h1>
            
            
            <h1 className='py-2'>Mechatronics: <span className='text-blue-200'>30 seats</span></h1>
            
            <h1 className='py-2'>Civil Engineering: <span className='text-blue-200'>30 seats</span></h1>
            
            <h1 className='py-2'>Mechanical Engineering: <span className='text-blue-200'>30 seats</span></h1>
            </div>
           
          
            </li>
          
        </ul>
        <a className='font-bold p-4 text-blue-700' href="https://www.nhitm.ac.in/">Click here to visit Official College Website </a>

        <p><span className='font-bold text-lg'>Location</span>:New Horizon Education Society's Complex, Off Ghodbunder Road, Anand Nagar, Kavesar, Thane West, Thane, Maharashtra 400615</p>

    </div>
    </div>
  )
}
