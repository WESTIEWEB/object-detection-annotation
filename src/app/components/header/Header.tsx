"use client"

import { Eye, TimerStart } from 'iconsax-react';
import Image from 'next/image'
import React, { useContext, useEffect, useState } from 'react'
import GlobalContext from 'src/app/context/GlobalContext';

const Header = () => {
  const timerInStorage = parseInt(localStorage.getItem('count') as string)
  const [count, setCount] = useState<number>(timerInStorage !== undefined || timerInStorage !== null ? timerInStorage : 1800)
  const [appTitle, setAppTitle] = useState<string>('Frontend Developer')
  const [testName, setTestName] = useState<string>('Skill assessment test')

  const { isTimerRunning } = useContext(GlobalContext)

  useEffect(() => {

    if (!isTimerRunning) return;
    const startPoint = 
    setInterval(() => {
      if (count > 0) {
        setCount((prev) => prev - 1);
      } else {
        clearInterval(startPoint)
        alert('Your Time is Up.')
      };
    }, 1000)
    
    return () => clearInterval(startPoint);

  },[count, isTimerRunning])

  const formatCountdown = (seconds: number) => {
    localStorage.setItem('count', JSON.stringify(count))
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <div className='w-full inline-block bg-white'>
      <div className='w-full mx-auto container flex px-4 md:px-0 justify-between gap-2 md:gap-0 items-center flex-wrap md:flex-nowrap py-4 md:py-8'>
        <div className='flex items-center w-full'>
            <Image src={'/app-logo.png'} width={63} height={62} alt='logo' />
            <div className='flex flex-col items-start ml-4'>
              <span className='md:text-xl text-lg font-medium  text-start text-[#000000]'>{appTitle}</span>
              <span className='text-[#8C8CA1] text-start md:text-sm font-normal'>{testName}</span>
            </div>
        </div>
        <div className='flex justify-between items-center'>
          <div className='bg-[#ECE8FF] h-10 flex gap-2 items-center justify-center min-w-[170px] rounded-[7px]'>
            <TimerStart color='#755AE2' size={18} />
            <div className='text-[#755AE2]'>
              <span className='font-bold text-base md:text-lg'>
                {formatCountdown(count)}
              </span>
              <span className='font-medium text-sm ml-1'>time left</span>
            </div>
          </div>
          <span className='bg-[#ECE8FF] rounded-full flex items-center justify-center ml-2 h-8 w-8 p-[2px] content-center '>
            <Eye color='#755AE2'  size={24} />
          </span>
        </div>
      </div>
    </div>
  )
}

export default Header;