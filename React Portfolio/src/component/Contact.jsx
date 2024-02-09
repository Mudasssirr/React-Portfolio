import React from 'react'
import { FaMapMarker, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineMail } from "react-icons/hi";
import '../assest/home.css';

const Contact = () => {
    return (
        <div name='contact' className='py-10 bg-[#1e252d] text-gray-300 w-full h-full'>
            {/* conatiner */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-5'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300' style={{ borderColor: '#00f2ff' }}>Contact</p>
                    <p className='text-gray-300 my-7'>DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL.</p>
                    <p className='text-gray-300 my-0 flex'><FaMapMarker className="text-[#00f2ff] mr-2" /> Karachi, Pakistan</p>
                </div>
                <div className='flex gap-4'>
                    <a href="/"><FaGithub className='Contact-icons Github-icon' size={30} /></a>
                    <a href="/"><FaLinkedinIn className='Contact-icons LinkedIn-icon' size={30} /></a>
                    <a href="/"><HiOutlineMail className='Contact-icons Email-icon' size={30} /></a>
                </div>
            </div>
        </div>
    )
}

export default Contact