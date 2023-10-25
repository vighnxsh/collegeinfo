import thane from '@/images/thane.jpg'
import Link from 'next/link'

export default function Home() {
  return (
    // <div className='h-screen-max  bg-gradient-to-r from-purple-300  to-blue-200'>
       
    //    <div className='flex flex-col  items-center justify-center  '>
      
    //   <h1 id='title' className='text-6xl p-4 pt-20 pb-20 mt-0 text-blue-500' >  College<span className='text-blue-100 bg-blue-700 p-2 rounded '>F</span>inder</h1>
      
    //    <p id='para' className='text-2xl px-20 text-blue-800'>
    // Choosing the right college is a pivotal decision in your academic and personal journey. Our college-finding website is here to make this process smoother and more informed.</p>
    
    // </div>
   
    // <div  id='clg'  className=' flex flex-row  text-xl px-20'>
    
    // <div  className='p-10 flex-col flex text-blue-200  bg-blue-600 rounded-xl'>
       
    //    <h1 className='mb-4'> Explore Colleges in Thane </h1>
      
    //    <Link href='/thane' className='bg-black text-white rounded-2xl p-3 px-2 text-xl'>Explore</Link>
     
    //   </div>
      
    //   <div  className='p-10'>
    //   Explore Colleges in Mumbai 
    //   </div>
    //   <div className='p-10'>
    //   Explore Colleges in Pune
    //   </div>
    //   <div className='p-10'>
     
    //   </div>
    // </div>
    // </div>
    <div className='bg-blue-100'>
      <h1 className='bg-blue-900 text-white p-5 m-1 font-semibold text-3xl'>College Info &gt;</h1>
      <div className='flex flex-col text-2xl p-4 m-3 font-semibold'>
       
       <h1  className='pt-4 '>Explore Colleges in Thane </h1>
       <img src="https://www.oneindia.com/img/1200x80/2016/03/thane-map-600-04-1457094160.jpg" alt="thane" className=' rounded-2xl w-100 h-60 border-black border-opacity-100'  />
       
       <Link href='thane' className='bg-blue-600 text-white p-3 mr-80  rounded-xl mt-2 '>Explore</Link>
      
        


       <h1  className='pt-20'>Explore Colleges in Mumbai</h1>
       <img src="https://lonelyplanetimages.imgix.net/a/g/hi/t/bbc886323ff07d295157ea35f423e121-gateway-of-india.jpg" alt="thane" className=' rounded-2xl w-100 h-60 border-black border-opacity-100'  />
       <Link href='mumbai' className='bg-blue-600 text-white p-3 mr-80  rounded-xl mt-2 '>Explore</Link>
       
       <h1  className='pt-20'>Explore Colleges in Pune</h1>
       <img src="https://im.whatshot.in/img/2019/Dec/shutterstock-1056186944-cropped-1576146443.jpg" alt="thane" className=' rounded-2xl w-100 h-60 border-black border-opacity-100'  />
       <Link href='pune' className='bg-blue-600 text-white p-3 mr-80  rounded-xl mt-2 '>Explore</Link>

      </div>

<div>
  <h1 className='p-3 bg-blue-400'>Made by Mini Project Group CSD_07 @NHITM</h1>
</div>


    </div>
   
  )
}
