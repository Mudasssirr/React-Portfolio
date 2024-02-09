import React from 'react'
import html from '../assest/html.png'
import css from '../assest/css.png'
import javascript from '../assest/javascript.png'
import reactImage from '../assest/react.png'
import tailwind from '../assest/tailwind.png'
import firebase from '../assest/firebase.png'
import github from '../assest/github.png'
import bootstrap from '../assest/bootstrap.png'
import npm from '../assest/npm.webp'


const Skills = () => {
    return (
        <div name='skills' className='bg-[#303846] text-gray-300 w-full h-full'>
            {/* conatiner */}
            <div className='max-w-[1000px] mx-auto py-10 p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4' style={{ borderColor: '#00f2ff' }}>Skills</p>
                    <p className='py-4'>These are technologies I've worked with</p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-5 gap-4 text-center py-8'>
                    <div className='shadow-md bg-[#1e252d] shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={html} alt="html" />
                        <p className='text-xl my-4 font-bold'>HTML</p>
                    </div>
                    <div className='shadow-md bg-[#1e252d] shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={css} alt="css" />
                        <p className='text-xl my-4 font-bold'>CSS</p>
                    </div>
                    <div className='shadow-md bg-[#1e252d] shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={javascript} alt="javascript" />
                        <p className='text-xl my-4 font-bold'>JavaScript</p>
                    </div>
                    <div className='shadow-md bg-[#1e252d] shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={bootstrap} alt="bootstrap" />
                        <p className='text-xl my-4 font-bold'>Bootstrap</p>
                    </div>
                    <div className='shadow-md bg-[#1e252d] shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={tailwind} alt="tailwind" />
                        <p className='text-xl my-4 font-bold'>Tailwind</p>
                    </div>
                    <div className='shadow-md bg-[#1e252d] shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={reactImage} alt="react" />
                        <p className='text-xl my-4 font-bold'>React</p>
                    </div>
                    <div className='shadow-md bg-[#1e252d] shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={firebase} alt="firebase" />
                        <p className='text-xl my-4 font-bold'>Firebase</p>
                    </div>
                    <div className='shadow-md bg-[#1e252d] shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={github} alt="github" />
                        <p className='text-xl my-4 font-bold'>Github</p>
                    </div>
                    <div className='shadow-md bg-[#1e252d] shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={npm} alt="npm" />
                        <p className='text-xl my-4 font-bold'>npm</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills