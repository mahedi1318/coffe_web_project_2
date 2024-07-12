import React from 'react'
import { FaBars } from "react-icons/fa6";
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <>
     <motion.div
     initial={{opacity:0, y: -100}}
     animate={{opacity:1, y: 0}}
     transition={{
         type: "spring",
         stiffness: 100,
         damping: 10,
         delay: 0.2
     }}
    className='flex justify-between pt-8 pb-8'>
        <div>
            <h1 className='lato_thin text-2xl font-bold text-white'><span className='text-yellow-700'>CODERS</span> CAFE.</h1>
        </div>
        <div className='text-white text-3xl '>
            <FaBars />
        </div>
     </motion.div>
    </>
  )
}

export default Navbar
