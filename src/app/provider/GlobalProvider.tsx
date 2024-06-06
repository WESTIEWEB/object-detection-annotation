'use client';

import { useState } from 'react';
import GlobalContext from '../context/GlobalContext';

type ProviderProps = {
  children: React.ReactNode;
};

const GlobalProvider: React.FC<ProviderProps> = ({ children }) => {
    const [isTimerRunning, setIsTimerRunning] = useState(false);
    const [movementDetection, setMovementDetection] = useState(false);

    const startTimer = () => {
      setIsTimerRunning(true);
    };

  return (
    <GlobalContext.Provider
      value={{
        isTimerRunning,
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
