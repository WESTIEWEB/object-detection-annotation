import Image from 'next/image';
import React, { useRef } from 'react'
import Webcam from 'react-webcam';

type CameraCamProps = {
    capturedImage: any; 
    cameraRef: React.RefObject<Webcam>;
}

const CameraCam: React.FC<CameraCamProps> = ({capturedImage, cameraRef}) => {
  
  const videoConstraints = {
    width: 270,
    height: 180,
    facingMode: 'user',
  }

  const onUserMedia = (e: any) => {
    if(typeof localStorage !== undefined) {
        localStorage.setItem('catured', JSON.stringify(e))
    }
  }
  return (
    <div className='border-[1px] h-[180px] relative w-9/12 items-start md:w-[264px] border-[#755AE2] rounded-[10px]'>
      <Webcam
          className='w-full h-full object-fill rounded-[10px]'
          ref={cameraRef}
           audio={false}
           height={'100%'}
           screenshotFormat="image/jpeg"
           width={'100%'}
           videoConstraints={videoConstraints}
           onUserMedia={onUserMedia}
           mirrored={true}
        />
      {capturedImage 
        && (
                <img src={capturedImage} style={{objectFit: 'fill', width: '100%', height: '100%'}} alt="Captured" className='absolute top-0 bottom-0' />
            )
        }
    </div>
  )
}

export default CameraCam
