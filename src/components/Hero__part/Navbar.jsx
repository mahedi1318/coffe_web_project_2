import { FaBars } from "react-icons/fa6";
import { motion } from 'framer-motion';
;

const Navbar = ({sidebar, setSidebar}) => {  

      const handleSidebar = ()=>{
        setSidebar(!sidebar)
      }

  return (
    <>
     <motion.div
      initial={{opacity:0, y: -30}}
      whileInView={{opacity:1, y: 0}}
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
        <div className='text-white text-3xl cursor-pointer relative z-10'>
            <FaBars onClick={handleSidebar} />
        </div>
     </motion.div>     
    </>
  )
}

export default Navbar
