import Link from 'next/link'
import React from 'react'
import { BiSearchAlt } from 'react-icons/bi'
import { IoArrowBackOutline } from 'react-icons/io5'

export default function dypatil() {
  return (
    <div>
      <div className=' ' >
           
           <div className='bg-blue-500 text-3xl p-5  font-bold text-white flex flex-row'>
         <h1 className='pr-2'>CollegeInfo</h1> <BiSearchAlt/>

      </div>
      <Link href='/mumbai' className='font-bold flex flex-row text-3xl p-1 pt-2 pl-5'> <IoArrowBackOutline/> </Link>
        
         <div className='pt-2 m-10 flex flex-col items-center '>
      
     

     
        <img src="https://resilientindia.co.in/assets/1459928047d-y-patil-technology.png" alt="" className='w-60 h-30' />
      
      <h1 className='text-xl font-bold'>D. Y. Patil College of Engineering</h1>
      
      <h1 className='text-xl'>Year of Foundation - 1983</h1>
     
        <ul>
          <li>
            <h1 className='font-bold text-2xl pt-20 pb-5'>Courses offered by College:</h1>

            <p>

            </p>
            
            <div className='text-lg font-bold  bg-slate-600 text-white p-5 rounded-xl'>
            <h1 className='py-2'>Computer Engineering: <span className='text-blue-200'>120 seats</span></h1>
            
            <h1 className='py-2'>Information Technology:  <span className='text-blue-200'>120 seats</span></h1>
{/*             
            <h1 className='py-2'>Artificial Intelligence and Data Science: <span className='text-blue-200'>120 seats</span></h1> */}
            
            
            <h1 className='py-2'>Electronics and Telecommunication: <span className='text-blue-200'>60 seats</span></h1>
            
            {/* <h1 className='py-2'>Computer and Communication Engineering: <span className='text-blue-200'>60 seats</span></h1> */}
            
            <h1 className='py-2'>Biotechnology Engineering: <span className='text-blue-200'>60 seats</span></h1>
            </div>
           
          
            </li>
          
        </ul>
        <a className='font-bold p-4 text-blue-700' href="https://dypatil.com/">Click here to visit Official College Website </a>

        <p><span className='font-bold text-lg'>Location : </span>Sector 24, Nerul, Navi Mumbai, Maharashtra 400614</p>

    </div>
    </div>
    </div>
  )
}
