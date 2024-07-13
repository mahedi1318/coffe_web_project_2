import React from 'react'
import { IoMdCall } from "react-icons/io";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGoogle } from "react-icons/fa6";
import CreditCard from "../../assets/images/credit-cards.webp"

const Footer = () => {
  return (
    <>
      <div className='bg-gradient-to-r from-primary to-primaryDark pt-12 pb-8 text-white'>
        <div className="container">
            <div className='grid xl:grid-cols-3 mb:grid-cols-1 xl:gap-8 mb:gap-12'>
                <div>
                    <h1 className='text-3xl font-bold uppercase lato_thin'>Coders Cafe</h1>
                    <p className='text-[15px] font-normal lato_thin mt-4 leading-6 xl:w-[400px] mb:w-[300px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque nesciunt reprehenderit qui natus
                         dolore enim nobis. Nulla distinctio, animi omnis  voluptatem.</p>
                    <div className=''>
                        <p className='flex items-center gap-3 mt-3 lato_thin '>
                            <IoMdCall />
                            +0 (123) 4567890
                        </p>  
                        <p className='flex items-center gap-3 mt-3 lato_thin '>
                            <FaMapLocationDot />
                            Uttara, Dhaka, Bangladesh
                        </p>                       
                    </div>
                </div>
                {/* Footer Link Section */}
                <div>
                    <h1 className='text-2xl font-bold lato_thin'>Quick Links</h1>
                    <div className='grid grid-cols-2 mt-5'>
                        <div>
                            <ul className='space-y-2 lato_thin text-[16px] font-semibold'>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Service</a></li>
                                <li><a href="#">Portfolio</a></li>
                                <li><a href="#">Contact Us</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                            </ul>
                        </div>
                        <div>
                            <ul className='space-y-2 lato_thin text-[16px] font-semibold'>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Contact Us</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Footer Link Section */}
                <div>
                    <h1 className='text-2xl font-bold lato_thin'>Follow Us</h1>
                    <div className='mt-5'>
                        <ul className='flex gap-3 text-[20px]'>
                            <li><a href="#"><FaFacebook /></a></li>
                            <li><a href="#"><FaInstagram /></a></li>
                            <li><a href="#"><IoLogoLinkedin /></a></li>
                            <li><a href="#"><FaGoogle /></a></li>
                        </ul>
                    </div>
                    <h2 className='text-[18px] font-bold lato_thin mt-5'>We accept</h2>
                    <div>
                        <img className='w-[300px] mt-4' src={CreditCard} alt="" />
                    </div>
                </div>
            </div>

            {/* Copy Right Section */}
            <div className='border-t-2 mt-8 pt-8 text-white text-center'>
                <p className='lato_thin text-[16px] font-semibold'>Copyright @copy; 2024 Company Name, All right reserved</p>
            </div>
        </div>
      </div>
    </>
  )
}

export default Footer
