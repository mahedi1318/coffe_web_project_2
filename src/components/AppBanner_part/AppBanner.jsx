import React from 'react'
import BannerImg from "../../assets/images/coffee-cover.jpg"
import PlayStore from "../../assets/images/play_store.png"
import AppStore from "../../assets/images/app_store.png"
import { motion } from 'framer-motion'


const bgStyle= {
    backgroundImage: `url(${BannerImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
   
}

const AppBanner = () => {
  return (
    <>
    <div className='pb-14'>
        <div className="container">
            <div style={bgStyle} className='w-full h-[400px] rounded-xl flex justify-end items-center'>
                <div className=' pr-[200px] text-center'>
                    <motion.h1 
                     initial={{opacity: 0, y: 100}}
                     whileInView={{opacity: 1, y: 0}}
                     transition={{                       
                         delay: 0.2,
                     }}
                    className='lato_thin text-3xl font-bold'>Download the app</motion.h1>
                    <motion.p 
                     initial={{opacity: 0, y: 100}}
                     whileInView={{opacity: 1, y: 0}}
                     transition={{                       
                         delay: 0.4,
                     }}
                    className='w-[400px] mt-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantiumearum
                          repudiandae at harum.</motion.p>
                          <div className='flex justify-center gap-4 mt-5'>
                            <motion.img 
                             initial={{opacity: 0, y: 100}}
                             whileInView={{opacity: 1, y: 0}}
                             transition={{                       
                                 delay: 0.6,
                             }}
                            className='w-[170px] ' src={PlayStore} alt="" />
                            <motion.img
                             initial={{opacity: 0, y: 100}}
                             whileInView={{opacity: 1, y: 0}}
                             transition={{                       
                                 delay: 0.8,
                             }} 
                            className='w-[170px] ' src={AppStore} alt="" />
                          </div>
                </div>
            </div>
        </div>
    </div>    
    </>
  )
}

export default AppBanner
