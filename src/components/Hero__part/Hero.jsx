import BgImage from "../../assets/images/bg-slate.png"
import CoffeeMain from "../../assets/images/black.png"
import Navbar from "./Navbar"
import { motion, spring } from "framer-motion"

const bgImage = {
    backgroundImage: `url(${BgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
}

const Hero = () => {
  return (
    <main style={bgImage}>
        <section className="w-full h-[850px]">
            <div className="container">
                {/* NavBar part Section */}
                <div>
                    <Navbar/>
                </div>
                {/* Hero part Section */}
                <div className="grid grid-cols-3 gap-5 w-full h-[750px]">
                    <div className="mt-[200px]">
                        <motion.h2
                        initial={{opacity:0, y: -100}}
                        animate={{opacity:1, y: 0}}
                        transition={{
                            type: "spring",
                            stiffness: 100,
                            damping: 10,
                            delay: 0.2
                        }}
                         className="lato_thin text-lightOrange text-[60px] font-bold w-[200px] leading-tight pl-24">Blvck Tumbler</motion.h2>
                        <motion.div
                         initial={{opacity:0, x: -100}}
                         animate={{opacity:1, x: 0}}
                         transition={{
                             type: "spring",
                             stiffness: 100,
                             damping: 10,
                             delay: 0.2
                         }}
                         className="relative z-10 pl-8 mt-24">
                            <h4 className="lato_thin text-lightOrange text-xl font-semibold pt-5 pb-3 relative z-10">Black LifeStyle Lover's,</h4>
                            <p className="lato_thin text-gray-500 text-[14px] font-normal leading-7 relative z-10">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo saepe iusto asperiores tempore,
                                 similique, dolore eveniet fuga molestiae ratione obcaecati expedita architecto!</p>
                                 <div className="w-[220px] h-[140px] bg-lightGray absolute top-0 left-0 z-0"></div>
                        </motion.div>
                    </div>
                    <div className="relative">
                        <motion.img
                        initial={{opacity:0, scale: 0}}
                        animate={{opacity:1, scale: 1}}
                        transition={{
                            type: "spring",
                            stiffness: 100,
                            damping: 10,
                            delay: 0.4,
                        }}
                        className="relative left-[10%] z-10" src={CoffeeMain} alt="" />
                        <h2 className="lato_thin text-black text-[120px] font-black w-[200px] leading-tight pl-24 absolute top-[-100px] left-[200px] opacity-10">Blvck Tumbler</h2>
                    </div>
                    <div className="">
                    <motion.div
                    initial={{opacity:0, x: 100}}
                    animate={{opacity:1, x: 0}}
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
        </section>      
    </main>
  )
}

export default Hero
