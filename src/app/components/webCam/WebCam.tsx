"use client"

import React, { Fragment, PropsWithChildren, useCallback, useRef, useState } from 'react'
import Webcam from 'react-webcam'

const videoConstraints = {
  width: 270,
  height: 180,
  facingMode: "user"
};

type CamProps = PropsWithChildren<{
  onCapture: (imageSrc: string) => void;
  showCam: boolean;
}>
  
const WebCam: React.FC<CamProps> = ({ onCapture, showCam }) => {
  const webcamRef = useRef<undefined | any>(null)

  const [capturedImage, setCapturedImage] = useState(null);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    if (imageSrc) {
        localStorage.setItem('capturedImage', imageSrc);
        setCapturedImage(imageSrc);
        onCapture(imageSrc);
    }
  }, [webcamRef, onCapture]);

  return (
    <Fragment>
      <div className='border-[1px] h-[180px] w-9/12 items-start md:w-[264px] border-[#755AE2] rounded-[10px]'>
        {
          showCam && <Webcam
          className='w-full h-full'
          ref={webcamRef}
           audio={false}
           height={'100%'}
           screenshotFormat="image/jpeg"
           width={'100%'}
           videoConstraints={videoConstraints}
        />
        }
        {capturedImage && (
                <img src={capturedImage} alt="Captured" className='mt-2' />
            )}
      </div>
    </Fragment>
  )
}

export default WebCam
