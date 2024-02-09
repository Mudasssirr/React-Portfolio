import React, { useState } from "react";
import '../assest/Navbar.css';
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#1e252d] text-gray-300">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >

        <div class="text-white font-bold p-3 navbar-logo">
        {'<Mudassir Awan />'}
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Menu */}
        <ul className="hidden md:flex space-x-6">
          <li className="py-1 text-white nav-links">
            <Link to="home" smooth={true} duration={500}>
              Intro
            </Link>
          </li>
          <li className="py-1 text-white nav-links">
            <Link to="work" smooth={true} duration={500}>
              Work
            </Link>
          </li>
          <li className="py-1 text-white nav-links">
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className="py-1 text-white nav-links">
            <Link to="skills" smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li className="py-1 text-white nav-links">
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </motion.div>
      {/* Hamburger */}
      <div onClick={handleNav} className="md:hidden z-10">
        {!nav ? <FaBars className="text-white cursor-pointer text-xl" /> : <FaTimes className="text-white cursor-pointer text-xl" />}
      </div>

      {/* Mobile Menu */}
      <ul
        className={`md:hidden absolute top-0 left-0 w-full h-screen bg-[#1e252d] flex flex-col justify-center items-center transform ${nav ? "translate-x-0" : "-translate-x-full"
          } transition-transform ease-in-out duration-300 gap-3`}
      >
        <li className="py-6 px-6 text-white font-bold nav-links">
          <Link onClick={handleNav} to="home" smooth={true} duration={500}>
            Intro
          </Link>
        </li>
        <li className="py-6 px-7 text-white font-bold nav-links">
          <Link onClick={handleNav} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="py-6 px-6 text-white font-bold nav-links">
          <Link onClick={handleNav} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 px-7 text-white font-bold nav-links">
          <Link onClick={handleNav} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 px-5 text-white font-bold nav-links">
          <Link onClick={handleNav} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
