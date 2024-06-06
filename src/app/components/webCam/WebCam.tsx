import React, { Fragment, forwardRef, useImperativeHandle, useRef, useState, useCallback, PropsWithChildren, useContext } from 'react';
import Webcam from 'react-webcam';
import GlobalContext from 'src/app/context/GlobalContext';

const videoConstraints = {
  width: 270,
  height: 180,
  facingMode: "user"
};

type CamProps = PropsWithChildren<{
  onCapture: (imageSrc: string) => void;
  mode: 'capture' | 'show';
  imageSrc?: any;
  micon?: boolean;
}>;

export interface WebCamHandle {
  startCapture: () => void;
  stopCapture: () => void;
  capture: () => void;
}


const WebCam = forwardRef<WebCamHandle, CamProps>(({ onCapture, micon, mode }, ref)  => {
  const { capturedImage, setCapturedImage } = useContext(GlobalContext)
  const webcamRef = useRef<Webcam>(null);

  const capture = useCallback(() => {
    if( webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      if (imageSrc) {
        setCapturedImage(imageSrc);
        onCapture(imageSrc);
    }
    }
  }, [webcamRef, onCapture]);

  useImperativeHandle(ref, () => ({
    startCapture: () => {
      if (webcamRef.current?.video) {
        navigator.mediaDevices.getUserMedia({ video: true })
          .then(stream => {
            (webcamRef.current!.video as HTMLVideoElement).srcObject = stream;
          })
          .catch(err => {
            console.error('Error accessing webcam: ', err);
          });
      }
    },
    stopCapture: () => {
      if (webcamRef.current?.video && (webcamRef.current!.video as HTMLVideoElement).srcObject) {
        const stream = (webcamRef.current!.video as HTMLVideoElement).srcObject as MediaStream;
        const tracks = stream.getTracks();
        tracks.forEach(track => track.stop());
        (webcamRef.current!.video as HTMLVideoElement).srcObject = null;
      }
    },
    capture
  }));

  return (
    <Fragment>
      <div className='border-[1px] h-[180px] relative w-9/12 items-start md:w-[264px] border-[#755AE2] rounded-[10px]'>
        {mode === 'capture' && (
          <Webcam
            className='w-full h-full object-fill rounded-[10px]'
            ref={webcamRef}
            audio={micon}
            height={'100%'}
            screenshotFormat="image/jpeg"
            width={'100%'}
            videoConstraints={videoConstraints}
          />
        )}
        {mode === 'show' && capturedImage && (
          <img
            src={capturedImage}
            style={{ objectFit: 'fill', width: '100%', height: '100%' }}
            alt="Captured"
            className='absolute rounded-[10px] top-0 bottom-0'
          />
        )}
      </div>
    </Fragment>
  );
});

export default WebCam;
