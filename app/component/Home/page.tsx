import React from 'react'
 
import Introduc from '../Introduc/page'
import Details from  '@/app/component/Details/page'
function home() {
  return (
    <div className=' flex flex-col md:flex-row mt-[100px] items-start w-[90%] mx-auto justify-start'>
      <Introduc></Introduc>
      <Details></Details>
      <div className="w-[400px] -z-10 fixed left-[500px] rounded-full h-[300px] blur-3xl  bg-[#323244e8] "></div>
    </div>
  )
}

export default home