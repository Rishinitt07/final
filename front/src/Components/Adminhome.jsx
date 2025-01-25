import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import Pic from "../assets/image.png"
import { FaSearch } from "react-icons/fa";
import { IoMdLogIn } from "react-icons/io";
import { LuUserRoundPen } from "react-icons/lu";


const Home = () => {
  return (
    <div>
        <div className='w-full h-30 bg-amber-400 font-serif text-5xl py-8 px-15'>
            Construct
            <div className='h-10 w-10 inline-block ml-260 absolute'><FaSearch className='h-10 w-9'/></div>
            <div className='h-10 w-10  inline-block ml-290 absolute'><LuUserRoundPen className='h-10 w-9'/></div>
            <div className='h-10 w-10 inline-block absolute ml-320'><IoMdLogIn className='h-10 w-9'/></div>
            
            {/* <div className='w-15 h-15 bg-black absolute inline-block ml-380 rounded-full'>

            </div> */}

        </div>
        <div>
        <h1 className='mt-20 ml-20 font-serif text-2xl'> <TypeAnimation
      sequence={[
       
        "Building your future, one project at a time.",
        2000, 
       "Where quality meets craftsmanship.",
        2000,
       "Constructing success with every brick.",
        2000,
        "From blueprint to reality – we build with precision.",
        2000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    /></h1>

    <div className='inline-block h-100 w-150 bg-gray-200 rounded-3xl absolute flex-wrap ml-290 mt-[-50px] '>
        <img className='rounded-2xl' src="../src/assets/image.png" />
    </div>
    <h1 className='ml-45 text-xl py-4 font-medium'>Laying the foundation for a better tomorrow</h1>
    <h1 className='ml-55 text-xl font-medium '>From plans to perfection</h1>

    </div>

        </div>
       
  )
}

export default Home