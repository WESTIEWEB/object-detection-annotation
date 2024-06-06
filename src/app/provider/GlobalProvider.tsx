'use client';

import { useState } from 'react';
import GlobalContext from '../context/GlobalContext';

type ProviderProps = {
  children: React.ReactNode;
};

const GlobalProvider: React.FC<ProviderProps> = ({ children }) => {
    const [count, setCount] = useState<number>(1800)
    const [isTimerRunning, setIsTimerRunning] = useState(false);
    const [movementDetection, setMovementDetection] = useState(false);
    const [capturedImage, setCapturedImage] = useState<string | null>('' || null);

    const startTimer = () => {
      setIsTimerRunning(true);
    };

  return (
    <GlobalContext.Provider
      value={{
        isTimerRunning,
        setCount,
        count,
        capturedImage,
        setCapturedImage,
        setIsTimerRunning,
        startTimer,
        movementDetection,
        setMovementDetection,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
