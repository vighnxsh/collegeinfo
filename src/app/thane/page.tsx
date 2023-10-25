import React from 'react'
import Link from 'next/link'


export default function thane() {
  return (
    <div className='flex flex-col items-center'>
      <h1 className='text-4xl font-bold pt-10' > Colleges in Thane</h1>
      <div className='flex flex-col'>
       <Link href="./nhitm" className='text-2xl m-10 font-bold bg-blue-200 p-3 rounded-xl'>New Horizon Institute of Technology</Link>

       <Link href="./ap" className='text-2xl m-10 font-bold bg-blue-200 p-3 rounded-xl'>AP Shah Institute of Technology</Link>
       <Link href="./kc" className='text-2xl m-10 font-bold bg-blue-200 p-3 rounded-xl'>K.C. College of Engineering</Link>
       <Link href="./lr" className='text-2xl m-10 font-bold bg-blue-200 p-3 rounded-xl'>L.R.Tiwari College of Engineering </Link>
       <Link href="./jd" className='text-2xl m-10 font-bold bg-blue-200 p-3 rounded-xl'>Shivajirao Jondhale College of Engineering </Link>

      </div>
    </div>
  )
}

