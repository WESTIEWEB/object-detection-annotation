import React from 'react'

const SystemCheck = () => {
  return (
    <div className='md:w-[832px] my-8 mx-auto w-[100%] md:h-[523px] h-[400px] bg-white rounded-[20px] justify-center itemes-center p-8'>
        <div className='flex justify-center gap-2 flex-col'>
            <p className='md:text-xl text-lg text-black font-medium'>
                System Check
            </p>
            <p className='text-[#4A4A68] md:text-[14px] text-[11px] -tracking-[0.24px] leading-[22px] font-normal'>
            We utilize your camera image to ensure fairness for all participants, and we also employ both your camera and microphone for a video questions where you will be prompted to record a response using your camera or webcam, so it's essential to verify that your camera and microphone are functioning correctly and that you have a stable internet connection.
            To do this, please position yourself in front of your camera, ensuring that your entire face is clearly visible on the screen. This includes your forehead, eyes, ears, nose, and lips. You can initiate a 5-second recording of yourself by clicking the button below.    
            </p>

        </div>
    </div>
  )
}

export default SystemCheck
