import React from 'react'
import MapImg from "../../assets/images/world-map.png"
import { motion } from 'framer-motion'

const WheretoBuy = () => {
  return (
    <>
      <div className='my-32'>
        <div className='container'>
            <div className='grid xl:grid-cols-3 mb:grid-cols-1 gap-28 items-center'>
                <div>
                    <motion.h1 
                    initial={{opacity: 0, y: 100}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{                       
                        delay: 0.2,
                    }}
                    className='lato_thin text-3xl font-extrabold text-[#444] w-[300px]'>Buy our product from anywhere</motion.h1>
                    <motion.div 
                    initial={{opacity: 0, y: 100}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{                       
                        delay: 0.4,
                    }}
                    className='flex gap-6 mt-6'>
                        <input type="text" placeholder='Name' className='xl:w-[160px] mb:w-full h-[45px] pl-5 border-2 border-[#cecccc] rounded-lg'/>
                        <input type="email" placeholder='Email' className='w-full h-[45px] pl-5 border-2 border-[#cecccc] rounded-lg'/>
                    </motion.div>
                    <motion.div 
                    initial={{opacity: 0, y: 100}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{                       
                        delay: 0.6,
                    }}
                    className='flex gap-6 mt-6'>
                        <input type="country" placeholder='Country' className='w-full h-[45px] pl-5 border-2 border-[#cecccc] rounded-lg'/>
                        <input type="text" placeholder='ZipCode' className='xl:w-[160px] mb:w-full h-[45px] pl-5 border-2 border-[#cecccc] rounded-lg'/>
                    </motion.div>
                    <motion.button
                    initial={{opacity: 0, y: 100}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{                       
                        delay: 0.8,
                    }} 
                    className='py-3 w-full block bg-yellow-500 text-center mt-6 rounded-lg lato_thin font-medium text-xl text-[#3d3d3d]'>Order Now</motion.button>
                </div>
                <div className='xl:col-span-2 mb:col-span-1'>
                    <motion.img 
                      initial={{opacity:0, scale: 0}}
                      whileInView={{opacity:1, scale: 1}}
                      transition={{
                          type: "spring",
                          stiffness: 100,
                          damping: 10,
                          delay: 1,
                      }}
                    className='w-[600px] m-auto' src={MapImg} alt="" />
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default WheretoBuy
