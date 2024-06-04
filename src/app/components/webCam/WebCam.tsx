"use client"

import React, { Fragment, useCallback, useRef } from 'react'
import Webcam from 'react-webcam'

const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user"
  };

  
  const WebCam = () => {
      const webcamRef = useRef<undefined | any>(null)
      
      const capture = useCallback(
          () => {
              const imageSrc = webcamRef.current.getScreenshot();
          }, [webcamRef]
      );
  return (
    <Fragment>
      <Webcam
        className='border-[1px] h-[180px] w-9/12 items-start md:w-[264px] border-[#755AE2] rounded-[10px]'
        ref={webcamRef}
         audio={false}
         height={164}
         screenshotFormat="image/jpeg"
         width={264}
         videoConstraints={videoConstraints}
      />
    </Fragment>
  )
}

export default WebCam
