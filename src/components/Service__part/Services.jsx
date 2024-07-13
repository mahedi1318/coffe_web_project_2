import SerImg1 from "../../assets/images/ser-3.jpg"
import { motion } from "framer-motion"
import { HeroData } from "../All__Data/AllData"

const cardVariant = { 
    hidden: {opacity:1, y: 20},
    visible: {
        opacity:1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 150,
            damping: 10,   
            ease: "easeInOut"        
        }
    }
}

const containerVariant = {
    hidden: {opacity:1},
    visible: {
        opacity:1,
        transition: {
            delay: 0.6,
            staggerChildren: 0.4,
        }
    }
}

const Services = () => {
  return (
    <>
      <div className='mt-[70px] mb-11'>
        <div className="container">
            <div className='text-center'>
                <motion.h2 
                initial={{opacity:0, scale: 0}}
                animate={{opacity:1, scale: 1}}
                transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                    delay: 0.4,
                }}
                className='lato_thin text-3xl font-extrabold text-[#000]'>Fresh And <span className='text-yellow-500'>Tasty</span></motion.h2>
                <motion.p
                initial={{opacity:0, y: 60}}
                animate={{opacity:1, y: 0}}
                transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                    delay: 0.2
                }} 
                className='xl:w-[500px] mb:w-[280px] m-auto lato_thin xl:text-[15px] mb:text-[14px] xl:font-medium mb:font-bold mt-2 text-[#444]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit vitae asperiores eum eos
                     qui minus aperiam totam reiciendis. Totam, ipsam!</motion.p>
            </div>
            <motion.div variants={containerVariant}
            initial="hidden" 
            whileInView={"visible"}
            viewport={{amount: 0.8}}
            className='grid xl:grid-cols-3 mb:grid-cols-1 xl:gap-44 mb:gap-16 xl:mt-9'>
                {HeroData?.map((item)=>(
                    <motion.div key={item.id} 
                    variants={cardVariant}
                    className=''>
                        <img className="w-full h-[300px] object-cover rounded-xl hover:scale-110 duration-300 cursor-pointer" src={SerImg1} alt="" />
                        <div className="text-center mt-6">
                            <h3 className="lato_thin text-2xl font-extrabold text-yellow-500">Black Coffee</h3>
                            <p className="w-[300px] m-auto lato_thin text-[15px] font-medium mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, dolores!</p>
                        </div>
                    </motion.div> 
                ))}                              
            </motion.div>
        </div>
      </div>
    </>
  )
}

export default Services
