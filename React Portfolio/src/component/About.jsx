import React from 'react'
import Typed from 'typed.js';

const About = () => {
    const el = React.useRef(null);

    React.useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'React', 'Tailwind', 'Firebase', 'Github', 'npm/yarn'],
            typeSpeed: 50,
            loop: true,
            loopCount: Infinity,
        });

        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
        };
    }, []);
    return (
        <div name='about' className='w-full bg-[#1e252d] text-gray-300'>
            <div className='flex py-10 flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px]  w-full grid grid-cols-2 gap-8'>
                    <div className='pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4' style={{ borderColor: '#00f2ff' }}>About Me</p>
                    </div>
                    <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='text-4xl font-bold'>
                        <p className='text-2xl font-bold'>Hi. I'm Mudassir Awan, a Passionate Front End Developer.</p>
                        <p className='text-2xl font-bold'>I know <span className='text-[#00f2ff]' ref={el} /></p>
                    </div>
                    <div>
                        <p>
                            I am a quick learner and collaborate closely with clients & collegues to create beautiful, dynamic, and user-friendly websites that are visually appealing & provide value. Let's work together to bring your ideas to life!
                            <br /><br />
                            Thank you for visiting my portfolio and I look forward to hearing from you!
                            <br /><br />
                            <span className='text-[#00f2ff] font-bold'>Have a great day!</span>
                            <br /><br />
                            <span className='text-[#00f2ff] font-bold'>- Mudassir Awan</span>
                            <br /><br />
                            <span className='text-[#00f2ff] font-bold'>- Web Developer</span>
                            <br /><br />
                            <span className='text-[#00f2ff] font-bold'>- Front End Developer</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About