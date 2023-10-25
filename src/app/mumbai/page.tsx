import React from 'react'
import Link from 'next/link'
import { AiOutlineHome } from 'react-icons/ai'


export default function thane() {
  return (
    <div className='flex flex-col items-center'>
      <h1 className='text-4xl font-bold pt-10' > Colleges in Mumbai</h1>
      <div className='flex flex-col'>
      <Link href='/' className='font-bold flex flex-row text-3xl p-2 pl-5'> < AiOutlineHome/> </Link>

       <Link href="./kj" className='text-2xl m-10 font-bold bg-blue-200 p-3 rounded-xl'>K.J Somaiya College of Engineering</Link>
       
       <Link href="./terna" className='text-2xl m-10 font-bold bg-blue-200 p-3 rounded-xl'>Terna Engineering College</Link>
       
       <Link href="./vidyalankar" className='text-2xl m-10 font-bold bg-blue-200 p-3 rounded-xl'>Vidyalankar institute of technology </Link>
       
       <Link href="./xavier" className='text-2xl m-10 font-bold bg-blue-200 p-3 rounded-xl'>Xavier Institute of Engineering </Link>

       <Link href="./dypatil" className='text-2xl m-10 font-bold bg-blue-200 p-3 rounded-xl'>D.Y Patil College of Engineering</Link>

      </div>
    </div>
  )
}

