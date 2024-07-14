import { useState } from "react"
import BgImage from "../../assets/images/bg-slate.png"
import CoffeeMain from "../../assets/images/black.png"
import Navbar from "./Navbar"
import { motion, spring } from "framer-motion"
import { RiFacebookFill } from "react-icons/ri";
import { IoLogoTwitter } from "react-icons/io";
import { CiInstagram } from "react-icons/ci";


const bgImage = {
    backgroundImage: `url(${BgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
}

const Hero = () => {

    const [ sidebar, setSidebar] = useState(false)


  return (
    <main style={bgImage}>
        <section className="w-full xl:h-[850px] mb:h-[900px] md:h-[800px] relative">
            <div className="container">
                {/* NavBar part Section */}
                <div>
                    <Navbar sidebar={sidebar} setSidebar={setSidebar} />
                </div>
                {/* Hero part Section */}
                <div className="grid xl:grid-cols-3 mb:grid-cols-1 md:grid-cols-2 gap-5 w-full h-[750px] relative z-0">
                    <div className="xl:mt-[200px] mb:mt-[50px] md:mt-[200px]">
                        <motion.h2
                        initial={{opacity:0, y: -100}}
                        whileInView={{opacity:1, y: 0}}
                        transition={{
                            type: "spring",
                            stiffness: 100,
                            damping: 10,
                            delay: 0.2
                        }}
                         className="lato_thin text-lightOrange text-[60px] font-bold w-[200px] leading-tight xl:pl-24 mb:pl-9">Blvck Tumbler</motion.h2>
                        <motion.div
                         initial={{opacity:0, x: -100}}
                         whileInView={{opacity:1, x: 0}}
                         transition={{
                             type: "spring",
                             stiffness: 100,
                             damping: 10,
                             delay: 0.2
                         }}
                         className="relative z-10 xl:pl-8 mb:pl-3 xl:mt-24 mb:mt-14">
                            <h4 className="lato_thin text-lightOrange text-xl font-semibold pt-5 pb-3 relative z-10">Black LifeStyle Lover's,</h4>
                            <p className="lato_thin text-gray-500 xl:text-[14px] mb:text-[12px] font-normal xl:leading-7 mb:leading-5 relative z-10">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo saepe iusto asperiores tempore,
                                 similique, dolore eveniet fuga molestiae ratione obcaecati expedita architecto!</p>
                                 <div className="w-[220px] h-[140px] bg-lightGray absolute top-0 left-0 z-0"></div>
                        </motion.div>
                    </div>
                    <div className="relative">
                        <motion.img
                        initial={{opacity:0, scale: 0}}
                        whileInView={{opacity:1, scale: 1}}
                        transition={{
                            type: "spring",
                            stiffness: 100,
                            damping: 10,
                            delay: 0.4,
                        }}
                        className="relative left-[10%] z-10 mb:max-w-[60%] md:max-w-[80%]" src={CoffeeMain} alt="" />
                        <h2 className="lato_thin text-black text-[120px] font-black w-[200px] leading-tight pl-24 absolute top-[-100px] xl:left-[200px] md:left-[-150px] opacity-10">Blvck Tumbler</h2>
                    </div>
                    <div className="xl:block mb:hidden md:hidden">
                    <motion.div
                    initial={{opacity:0, x: 100}}
                    whileInView={{opacity:1, x: 0}}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 10,
                        delay: 0.2
                    }}
                    className="mt-[200px]">
                        <h2 className="lato_thin text-lightOrange text-[60px] font-bold w-[200px] leading-tight pl-24 opacity-0">Blvck Tumbler</h2>
                        <div className="relative z-10 pl-8 mt-24">
                            <h4 className="lato_thin text-lightOrange text-xl font-semibold pt-5 pb-3 relative z-10">The Design,</h4>
                            <p className="lato_thin text-gray-500 text-[14px] font-normal leading-7 relative z-10 w-[400px]">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                             Ratione distinctio cumque temporibus adipisci harum corrupti?</p>
                                 <div className="w-[220px] h-[140px] bg-darkGray absolute top-0 right-0 z-0"></div>
                        </div>
                    </motion.div>
                    </div>
                </div>
            </div>  
            {/* sidebar part */}
            {
                sidebar && (
                    <div>
                        <motion.div 
                          initial={{x: 100}} 
                          animate={{x: 0}} 
                        className='absolute top-0 right-0 xl:w-[140px] mb:w-[80px] h-full bg-yellow-700 z-0 flex justify-center items-center'>
                            <div className="flex flex-col gap-6 justify-center items-center">
                                <div className="w-[1px] h-[50px] bg-white"></div>
                                <div className="border-2 border-white rounded-full p-2 cursor-pointer"><RiFacebookFill /></div>
                                <div className="border-2 border-white rounded-full p-2 cursor-pointer"><IoLogoTwitter /></div>
                                <div className="border-2 border-white rounded-full p-2 cursor-pointer"><CiInstagram /></div>     
                                <div className="w-[1px] h-[50px] bg-white"></div>
                            </div>
                        </motion.div>
                    </div>
                )
            }
           
        </section>      
    </main>
  )
}

export default Hero
