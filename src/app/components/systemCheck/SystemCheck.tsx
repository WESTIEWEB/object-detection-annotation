'use client'

import React, { useContext, useEffect, useRef, useState } from 'react'
import WebCam from '../webCam/WebCam'
import Devices from './reusables/Devices.'
import { Danger, LampCharge, Microphone, MonitorRecorder, TickCircle, Wifi } from 'iconsax-react'
import { IoIosCheckmark, IoIosRemove } from 'react-icons/io'
import ReusableButton    from '../button/Button'
import ReusableModal from '../modal/modal'
import useWindowSize from 'src/app/hooks/useWindowSIze'
import CameraCam from '../cameraCam/CameraCam'
import Webcam from 'react-webcam'
import GlobalContext from '../../context/GlobalContext';

const SystemCheck = () => {
    const [imageCaptured, setImageCaptured] = useState(false);
    const [mode, setMode] = useState<'show' | 'capture' >('capture')
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [showCam, setShowCam] = useState(false);

    const { width: screenWidth } = useWindowSize();
    const [micOn, setMicOn] = useState<boolean>(false)
    const cameraRef = useRef<any>(null)

    //state from context
    const { setMovementDetection, setCapturedImage, capturedImage, movementDetection, setIsTimerRunning, isTimerRunning } = useContext(GlobalContext);


    
    const capturePhoto = () => {
        
        if (cameraRef.current) {
           const imageSrc = cameraRef.current.capture();
          if (imageSrc) {
            setCapturedImage(imageSrc);
            setImageCaptured(true);
            setMode('show');
            setModalIsOpen(true);
          }
        }
    };

    


    
    const handleCapture = (imageSrc: string) => {
        setCapturedImage(imageSrc);
        if(imageSrc) {
            
            setMode(mode === 'capture' ? 'show' : 'capture')
        }
        setImageCaptured(true);
        setModalIsOpen(true);
    };


    const handleMic = () => {
        setMicOn((prev) => !prev)
    }

    const handleCam = () => {
        setMode(mode === 'capture' ? 'show' : 'capture')
    }

    const handleProceed = () => {
        setShowCam((prev) => !prev)
        setIsTimerRunning((prev) => !prev)
        setImageCaptured((prev) => !prev)
        setMode(mode === 'capture' ? 'show' : 'capture')
        setMovementDetection((prev) => !prev);
    };

    const handleClose = (): void => {
        setModalIsOpen((prev) => !prev)
        setImageCaptured((prev) => !prev)
    }

    useEffect(() => {

        if (movementDetection) {
            // Mock movement detection
            const interval = setInterval(() => {
                console.log('Detecting movement...');
            }, 1000);

            return () => clearInterval(interval);
        }
    }, [movementDetection]);

    const modalHeight = screenWidth * 0.15;

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
                {/* {
                    showCam ? <WebCam mode='capture' micon={micOn} onCapture={handleCapture} /> :
                    <CameraCam cameraRef={cameraRef} capturedImage={imageUrl} />
                } */}
                <WebCam ref={cameraRef} onCapture={handleCapture} mode={mode} imageSrc={capturedImage} micon={micOn} />
                <div className='flex md:w-[30%] items-start w-[70%] flex-col md:items-center gap-4 justify-center'>
                    <div className='w-full flex items-center gap-4'>
                        <Devices handlePres={handleCam} label='Webcam' size='h-[80px] w-[105px]' bg='bg-[#F5F3FF]' iconBg='!bg-[#755AE2]' color='!text-[#ffffff]' icon={<MonitorRecorder size={8} color='#FFFFFF' /> }>
                            <div className='h-[40px] w-[40px] p-[2px] flex items-center justify-center rounded-full border-[3px] border-[#755AE2]'>
                                <div className='w-full h-full flex items-center opacity-100 justify-center  bg-[#755AE2] rounded-full'>
                                { mode !== 'show' ? (
                                <IoIosCheckmark size={36} color='white' />
                                ) : (
                                <IoIosRemove size={36} color='white' />
                                )}
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
                        <Devices handlePres={handleMic} label='Gadget mic' size='h-[80px] w-[105px]' bg='bg-[#F5F3FF]' iconBg='!bg-[#755AE2]' color='!text-[#ffffff]' icon={<Microphone size={8} color='#FFFFFF' /> }>
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

            <ReusableButton clickEvent={capturePhoto} styles='w-[207px] h-[44px]'>
                <p className='text-[#fff] text-sm font-medium'>Take picture and continue</p>
            </ReusableButton>

        </div>

        
            { imageCaptured &&  
            <ReusableModal>
                <div className={` rounded-[18px] bg-[#F5F3FF] mx-auto flex flex-col`} style={{ height: screenWidth > 768 ? `${modalHeight}px` : `${screenWidth * 0.7}px` , width: screenWidth > 768 ? `${screenWidth * 0.25}px`: `${screenWidth * 0.9}px` }}>
                    <div className='w-full flex items-center rounded-tr-[18px] rounded-tl-[18px] justify-between px-4 h-[18%] bg-[#755AE2]'>
                        <p className='text-sm md:text-base font-medium text-[#FFFFFF]'>Start assessment</p>
                        {/* <button className='bg-[#F5F3FF33] text-xs md:text-sm font-normal'>
                            Close
                        </button> */}
                        <ReusableButton clickEvent={handleClose} styles='w-[75px] bg-[#F5F3FF33] rounded-[9px] h-[32px] items-end'>
                            <p className='text-[#FFFFFF] text-xs md:text-sm font-normal'>Close</p>
                        </ReusableButton>
                    </div>
                    <div className='w-fill bg-[#F5F3FF] flex flex-col items-center justify-center h-[57%]'>
                        <p className='text-[#755AE2] md:text-xl sm:text-base font-medium -tracking-[0.24px]'>Proceed to start assessment</p>
                        <span className='text-[#675E8B] -tracking-[0.24px] text-center font-normal text-sm'>
                            Kindly keep to the rules of the assessment and<br/>
                            sit up, stay in front of your camera/webcam and start <br/> your assessment.
                        </span>
                    </div>
                    <div className='bg-[#FFFFFF] rounded-[18px] flex items-center h-[25%] px-8'>
                        <ReusableButton clickEvent={handleProceed} styles='w-[140px] h-[44px] ml-auto'>
                            <p className='text-[#fff] md:text-sm text-xs font-normal'>Proceed</p>
                        </ReusableButton>
                    </div>
                </div>
            </ReusableModal>}
        
    </div>
  )
}

export default SystemCheck
