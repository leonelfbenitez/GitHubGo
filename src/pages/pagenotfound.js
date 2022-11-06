import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Img from '../assets/404bg.jpg'


function PageNotFound() {
    const navigate = useNavigate();
    const [timer, setTimer] = useState(5);
    useEffect(() => {
        const interval = setInterval(()=>{
            setTimer(i=> i-1)
        }, 1000)
        const timeout = setTimeout(() => {
            navigate("/GitHubGo/")
        }, 5000)
        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
        };
    }, [navigate])


    return (
        <div className='w-full h-screen flex justify-center items-end' >
            <div className='bg-black opacity-70 z-10 absolute w-full h-screen' />
            <img alt="unknown planet" loading='lazy' className='bg-fit h-screen w-fit object-cover absolute' src={Img} />
            <div className='w-full h-screen absolute flex justify-center flex-col items-center gap-3'>
                <div className='text-9xl font-black z-20 text-white'>404</div>
                <div className='text-xl font-black z-20 text-white'>Opps! Wrong Planet!</div>
                <div className='text-sm font-black z-20 text-white'>Redirecting to the homepage in {timer} seconds</div>
            </div>
            <a className='z-20 text-xs relative text-white p-4' href="http://www.freepik.com">&copy; Designed by vectorpouch / Freepik</a>
        </div>
    )
}

export default PageNotFound