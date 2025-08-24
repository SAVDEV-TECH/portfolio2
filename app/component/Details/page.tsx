import React from 'react'
import Image from "next/image"
import creativehub from "/public/creativehub.png"
import arccreative from "/public/arccreative.png"
import sign from "/public/signpagepick.png"
import mog from "/public/mogshop.png"
import uniport from "/public/uniportmap.png"
import imdb from "/public/imdbclone.png"

import Link from 'next/link'



function details() {
  return (
    <div    className='flex w-[90%]  md:w-[55%] text-[#94a3b8] flex-col items-start md:items-center justify-center'>
 
      <section id='home' className='  flex flex-col gap-6'>
      <h2 className=' sticky  z-50 top-0  md:hidden    font-bold text-white text-[18px]'>About</h2>
        <p className=''> I’m a frontend developer passionate about building accessible, responsive, and engaging user interfaces. I love working at the intersection of design and development, turning Figma concepts into pixel-perfect, performance-driven experiences with React, Next.js, and Tailwind CSS.
             </p>                                                            
             <p>  I take pride in writing clean, scalable code and creating products that feel intuitive across all devices. From crafting multi-vendor e-commerce flows to developing a campus navigation app, I focus on usability, performance, and seamless API integration. My goal is to bridge the gap between design and engineering, making sure every product I build is both beautiful and technically sound.</p>  
      </section>
      <section id='experience' className='mt-6 pt-[60px]'>
      <h2 className=' sticky z-50 top-0  md:hidden  line-clamp-2   font-bold text-white text-[18px]'>experience</h2>
        
      Frontend Developer · ArcCreative
Nov 2024 – Apr 2025
Developed and deployed a responsive website from scratch, focusing on performance, accessibility, and modern design principles.

Collaborated closely with the design team to translate Figma mockups into pixel-perfect user interfaces.

Worked across the full frontend stack using HTML, CSS, React, Next.js, and Tailwind CSS.

Took ownership of core components and contributed to a clean, maintainable codebase.

Gained experience working independently and managing time effectively within a fast-paced environment.
      </section>
      <section id='project'>
      <h2 className=' sticky pb-4 z-[100] top-0  md:hidden    font-bold text-white text-[18px]'>Project</h2>
      <div>
        <div className="flex flex-col  items-start lg:flex-row   md:flex-col cursor-pointer px-4 py-4 rounded-lg hover:bg-[#20192eb4] transition-[500]   mt-6    gap-4    md:items-start  justify-center">
        
          <Image alt='image' className='rounded-[10px]' src={creativehub} width={200} height={200}></Image>
          <div>
            <h2 className='text-white  font-semibold'>Build Creativehub</h2>
            <p className='text-wrap'>
            The Creative JavaScriptub project was built using HTML, CSS, and JavaScript to deliver a clean, interactive, and visually appealing user interface. It features smooth animations, responsive layouts, and dynamic interactions powered by vanilla JavaScript. This project showcases the power of core web technologies in creating engaging user experiences without the use of external frameworks.
      </p>
         <ul className='flex mt-3 gap-4 items-center '>
            <li><span className='px-2 py-1 bg-green-400 font-bold rounded-lg text-[10px] text-green-800'>HTML</span></li>
            <li><span className='px-2 py-1 bg-green-400 font-bold rounded-lg text-[10px] text-green-800'>CSS</span></li>
            <li><span className='px-2 py-1 bg-green-400 font-bold rounded-lg text-[10px] text-green-800'>JAVASCRIPT</span></li>
            <li><Link href='https://samuelsaviour.github.io/webpage/creative%20hub/creativehub.html' className='px-4 py-1  font-bold ml-auto  rounded-lg text-[10px] text-green-400'>VIEW</Link></li>
          </ul>
          
          </div>
          
        </div>
         
      </div>
 
      <div>
        <div className="flex flex-col  lg:flex-row md:flex-col   items-start cursor-pointer px-4 py-4 rounded-lg hover:bg-[#20192eb4] transition-[500]   mt-6    gap-4    md:items-start  justify-center">
          <Image alt='image' className='rounded-[10px]' src={arccreative} width={200} height={200}></Image>
          <div>
            <h2 className='text-white  font-semibold'>Build Arcreatives</h2>
            <p className='text-wrap'>
            Arcreative is a dynamic and modern web application I built using React.js. The platform showcases a seamless user experience with interactive components and efficient state management. React component-based architecture made it easy to scale and maintain the application while ensuring fast performance and responsiveness across devices.
         </p>
 <ul className='flex gap-4 mt-3 items-center '>
    <li><span className='px-2 py-1 bg-green-400 font-bold rounded-lg text-[10px] text-green-800'>REACT JS</span></li>
    <li><span className='px-2 py-1 bg-green-400 font-bold rounded-lg text-[10px] text-green-800'>TAILWIND CSS</span></li>
    <li><Link href='https://savdev-tech.github.io/Arccreative/' className='px-4 py-1 font-bold ml-auto rounded-lg text-[10px] text-green-400'>VIEW</Link></li>
  </ul>
          </div>
          
        </div>
         
      </div>


      <div>
        <div className="flex flex-col  md:flex-col lg:flex-row cursor-pointer px-4 py-4 rounded-lg hover:bg-[#20192eb4] transition-[500]   mt-6    gap-4 items-start   md:items-start  justify-center">
          <Link href=' '></Link>
          <Image alt='image' className='rounded-[10px]' src={uniport} width={200} height={200}></Image>
          <div>
            <h2 className='text-white  font-semibold'>Build uniport navigation app</h2>
            <p className='text-wrap'>the navigation app was buitlt to help new student to locate their various department and faculty. it was built with HTML,CSS and JavaScript, also it is user friendly and responsive  </p>
 <ul className='flex gap-4 mt-3 items-center '>
    <li><span className='px-2 py-1 bg-green-400 font-bold rounded-lg text-[10px] text-green-800'>REACT JS</span></li>
    <li><span className='px-2 py-1 bg-green-400 font-bold rounded-lg text-[10px] text-green-800'> TAILWIND CSS</span></li>
    <li><Link href='https://uniport-navigation-o86t.vercel.app/map.html ' className='px-4 py-1   font-bold ml-auto  rounded-lg text-[10px] text-green-400'>VIEW</Link></li>
  </ul>
          </div>
          
        </div>

        {/* roll to decorate */}
          <div className="flex flex-col  md:flex-col lg:flex-row cursor-pointer px-4 py-4 rounded-lg hover:bg-[#20192eb4] transition-[500]   mt-6    gap-4 items-start   md:items-start  justify-center">
          <Link href=' '></Link>
          <Image alt='image' className='rounded-[10px]' src={mog} width={200} height={200}></Image>
          <div>
            <h2 className='text-white  font-semibold'>Build Mog E-cormerce site</h2>
            <p className='text-wrap'> The  mog  was built using Next.js, designed to provide a smooth and responsive user experience. Leveraging Next.js component-based structure, I created reusable form components with real-time validation and dynamic feedback. The page ensures efficient handling of user input and state management, making the   process fast, intuitive, and user-friendly.</p>
 <ul className='flex gap-4 mt-3 items-center '>
    <li><span className='px-2 py-1 bg-green-400 font-bold rounded-lg text-[10px] text-green-800'>NEXT JS</span></li>
    <li><span className='px-2 py-1 bg-green-400 font-bold rounded-lg text-[10px] text-green-800'> TAILWIND CSS</span></li>
    <li><Link href='https://mog-shop-8o8r.vercel.app/ ' className='px-4 py-1   font-bold ml-auto  rounded-lg text-[10px] text-green-400'>VIEW</Link></li>
  </ul>
          </div>
          
        </div>
            <div className="flex flex-col  md:flex-col lg:flex-row cursor-pointer px-4 py-4 rounded-lg hover:bg-[#20192eb4] transition-[500]   mt-6    gap-4 items-start   md:items-start  justify-center">
          <Link href=' '></Link>
          <Image alt='image' className='rounded-[10px]' src={imdb} width={200} height={200}></Image>
          <div>
            <h2 className='text-white  font-semibold'>Build IMDB clone</h2>
            <p className='text-wrap'> The  IMDBCLONE was built using Next.js, designed to provide a smooth and responsive user experience. Leveraging next.’s component-based structure, I created reusable form components with real-time validation and dynamic feedback. The page ensures efficient handling of user input and state management, making the       process fast, intuitive, and user-friendly.</p>
 <ul className='flex gap-4 mt-3 items-center '>
    <li><span className='px-2 py-1 bg-green-400 font-bold rounded-lg text-[10px] text-green-800'>NEXT JS</span></li>
    <li><span className='px-2 py-1 bg-green-400 font-bold rounded-lg text-[10px] text-green-800'> TAILWIND CSS</span></li>
    <li><Link href=' https://imdb-clone-cgw7.vercel.app/ ' className='px-4 py-1   font-bold ml-auto  rounded-lg text-[10px] text-green-400'>VIEW</Link></li>
  </ul>
          </div>
          
        </div>
      </div>
      </section>
    </div>
  )
}

export default details
