import React from 'react'
import Nhitm from '@/components/nhitm'
import Apshah from '@/components/apshah'

export default function thane() {
  return (
    <div className='flex flex-col items-center'>
      <h1 className='text-4xl font-bold pt-10' > Colleges in Thane</h1>
      <div className='flex flex-col'>
        <Nhitm/>
        <Apshah/>
      </div>
    </div>
  )
}

