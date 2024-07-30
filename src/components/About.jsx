import React, { useEffect } from 'react'
import { AiOutlineCloudDownload } from 'react-icons/ai'
import '../App.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

const About = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 })
    })

    return (
        <div name="about" className='w-full h-auto bg-gradient-to-b from-gray-800 to-black text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-auto'>
                <div className='pb-8'>

                    <h2 className='text-4xl  font-bold inline border-b-4 border-gray-500'>About</h2>
                </div>
                <p data-aos="slide-up" data-aos-duration="500" className='text-gray-400 mt-5 ease-in fade-in'>
                    I completed my B.Tech in Electrical Engineering from Gandhi Institute for Technology in 2021. Along the way, I explored various fields, including Web App Development, Content Creation, Freelancing and Entrepreneurship. Devloped various web applications using the technologies such as Java, React and NodeJS. Having expertise in Java for the back-end development and built various end-to-end projects.
                </p>
                <p data-aos="slide-up" data-aos-duration="500" className='text-gray-400 mt-5 ease-in fade-in'>
                    I'm continuously working with many projects personal projects. I have an Instagram page (@code_blaze_28) where I create content for those who are just starting with programming.
                </p>
                <div data-aos="zoom-in" data-aos-duration="500" className='mb-20 fade-in flex mx-auto items-center justify-center hover:scale-105 duration-300 rounded bg-gradient-to-b from-cyan-500 to-blue-500 lg:w-1/5 md:w-1/5 w-2/4 h-10 text-center cursor-pointer mt-10 gap-2'>


                    <AiOutlineCloudDownload />
                    <a href="/Bijay_Kumar_Tudu_Resume.pdf" download>Download CV</a>
                </div>
            </div>
        </div>
    )
}

export default About