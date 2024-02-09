import React from "react";
import '../assest/home.css';
import { motion } from "framer-motion";
import myImage from '../assest/your-image'
import myResume from '../assest/your-resume'

const Home = () => {
  return (
    <>
      <div name="home" className="w-full bg-[#1e252d] flex flex-col md:flex-row home-container">
        {/* Container */}
        <div className="md:w-1/2 mx-auto px-8 flex flex-col justify-center details-container">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="text-white py-3 max-w-[700px]">Hi, my name is</p>
            <h1 className="text-4xl md:text-7xl font-bold text-[#ccd6f6]">
              M. Mudassir Awan
            </h1>
            <h2 className="text-4xl md:text-6xl py-3 font-bold text-[#8892b0]">
              I'm a <span className="text-[#00f2ff] py-3 max-w-[700px]">Front End Developer</span> 
            </h2>
            <p className="text-[#8892b0] py-3 max-w-[700px]">
              I am a Front end developer passionate about crafting dynamic and
              user-centric web applications. With a hands-on experience in HTML,
              CSS, JavaScript, ES6, React, Firebase database, any many more. I bring creativity and efficiency
              to every project.
            </p>
            <div className="flex gap-3">
            <a download href={myResume} target="_blank" rel="noopener noreferrer">
                <button className="download-cv-btn flex items-center cursor-pointer border-2 p-2">
                  Download Cv
                </button>
              </a>
            </div>
          </motion.div>
        </div>
        <div className="md:w-1/2 mx-auto px-8 flex flex-col justify-center h-full text-center">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <img className='my-Image inline-block' src={myImage} alt="myImage" />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Home;
