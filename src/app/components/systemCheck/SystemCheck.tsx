'use client'

import React, { useEffect, useState } from 'react'
import WebCam from '../webCam/WebCam'
import Devices from './reusables/Devices.'
import { Danger, LampCharge, Microphone, MonitorRecorder, TickCircle, Wifi } from 'iconsax-react'
import { IoIosCheckmark } from 'react-icons/io'
import ReusableButton    from '../button/Button'

const SystemCheck = () => {
    const [imageCaptured, setImageCaptured] = useState(false);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [showCam, setShowCam] = useState(false);
    const [movementDetection, setMovementDetection] = useState(false);

    const handleCapture = (imageSrc: string) => {
        setImageCaptured(true);
        setModalIsOpen(true);
    };

    const handleProceed = () => {
        setModalIsOpen(false);
        setMovementDetection(true);
    };

    useEffect(() => {
        if (movementDetection) {
            // Mock movement detection
            const interval = setInterval(() => {
                console.log('Detecting movement...');
            }, 1000);

            return () => clearInterval(interval);
        }
    }, [movementDetection]);


  return (
    <div className='md:w-[832px] my-8 mb-[10px] mx-auto w-[90%] container md:h-[523px] h-auto bg-white rounded-[20px] justify-center itemes-center p-8'>
        <div className='flex justify-center w-full  gap-2 flex-col'>
            <p className='md:text-xl text-lg text-black font-medium'>
                System Check
            </p>
            <p className='text-[#4A4A68] md:w-[721px] w-full md:text-[14px] text-[11px] -tracking-[0.24px] leading-[22px] font-normal'>
            We utilize your camera image to ensure fairness for all participants, and we also employ both your camera and microphone for a video questions where you will be prompted to record a response using your camera or webcam, so it's essential to verify that your camera and microphone are functioning correctly and that you have a stable internet connection.
            To do this, please position yourself in front of your camera, ensuring that your entire face is clearly visible on the screen. This includes your forehead, eyes, ears, nose, and lips. You can initiate a 5-second recording of yourself by clicking the ReusableButton     below.    
            </p>

            <div className='my-4 flex md:flex-row gap-4 flex-col'>
                <WebCam onCapture={handleCapture} showCam={showCam}/>
                <div className='flex md:w-[30%] items-start w-[70%] flex-col md:items-center gap-4 justify-center'>
                    <div className='w-full flex items-center gap-4'>
                        <Devices label='Webcam' size='h-[80px] w-[105px]' bg='bg-[#F5F3FF]' iconBg='!bg-[#755AE2]' color='!text-[#ffffff]' icon={<MonitorRecorder size={8} color='#FFFFFF' /> }>
                            <div className='h-[40px] w-[40px] p-[2px] flex items-center justify-center rounded-full border-[3px] border-[#755AE2]'>
                                <div className='w-full h-full flex items-center opacity-100 justify-center  bg-[#755AE2] rounded-full'>
                                    <IoIosCheckmark size={36} color='white' />
                                </div>
                              {/* <TickCircle size="32" className='white-fill' fill='#755AE2' color="#755AE2" variant="Bulk"/> */}
                            </div>
                        </Devices>
                        <Devices label='Internet Speed' size='h-[80px] w-[105px]' bg='bg-[#F5F3FF]' iconBg='!bg-[#FF5F56]' color='!text-[#ffffff]' icon={<Wifi size={8} color='#FFFFFF' />}>
                            <div className='h-[40px] w-[40px] flex items-center bg-[#FF5F561A] justify-center rounded-full relative'>
                                {/* Existing content */}
                                <Danger size="24" fill='#755AE2' color="#FF5F56" variant="Outline" />

                                {/* Nested div with 3px right border */}
                                <div className='absolute inset-0 w-1/2 left-[50%] border border-r-2 border-t-2 border-b-2 border-l-0 border-[#FF5F56] rounded-ends' />
                            </div>
                        </Devices>
                    </div>
                    <div className='w-full flex items-center gap-4'>
                        <Devices label='Gadget mic' size='h-[80px] w-[105px]' bg='bg-[#F5F3FF]' iconBg='!bg-[#755AE2]' color='!text-[#ffffff]' icon={<Microphone size={8} color='#FFFFFF' /> }>
                            <div className='h-[40px] w-[40px] p-[2px] flex items-center justify-center rounded-full border-[3px] border-[#755AE2]'>
                                <div className='w-full h-full flex items-center opacity-100 justify-center  bg-[#755AE2] rounded-full'>
                                    <IoIosCheckmark size={36} color='white' />
                                </div>
                              <Danger size="32" className='white-fill' fill='#755AE2' color="#FF5F56" variant="Outline"/>
                            </div>
                        </Devices>
                        <Devices label='Ligting' size='h-[80px] w-[105px]' bg='bg-[#F5F3FF]' iconBg='!bg-[#755AE2]' color='!text-[#ffffff]' icon={<LampCharge size={8} color='#FFFFFF' />}>
                            <div className='h-[40px] w-[40px] flex items-center bg-[#E6E0FF] justify-center rounded-full relative'>
                                {/* Existing content */}
                                <LampCharge size="24" fill='#755AE2' color="#755AE2" variant="Outline" />

                                {/* Nested div with 3px right border */}
                                <div className='absolute inset-0 w-1/2 left-[50%] border border-r-2 border-t-2 border-b-2 border-l-0 border-[#755AE2] rounded-ends' />
                            </div>
                        </Devices>
                    </div>
                </div>
            </div>

            <ReusableButton>
                <p className='text-[#fff] text-sm font-medium'>Take picture and continue</p>
            </ReusableButton    >

        </div>
    </div>
  )
}

export default SystemCheck
