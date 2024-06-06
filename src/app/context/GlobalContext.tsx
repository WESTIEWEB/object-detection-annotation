import { PropsWithChildren, Dispatch, SetStateAction, createContext, ReactNode } from "react";


type GlobalContextType = PropsWithChildren<{
    setCapturedImage: Dispatch<SetStateAction<string | null>>,
    capturedImage: string | null,
    isTimerRunning: boolean;
    setMovementDetection: Dispatch<SetStateAction<boolean>>,
    movementDetection: boolean,
    startTimer: () => void;
    count: number;
    setCount: Dispatch<SetStateAction<number>>;
    setIsTimerRunning: Dispatch<SetStateAction<boolean>>
}>;

const GlobalContext = createContext<GlobalContextType>({
    isTimerRunning: false,
    movementDetection: false,
    setCapturedImage: () => {},
    setCount: () => {},
    count: 1800,
    capturedImage: null,
    startTimer: () => {},
    setMovementDetection: () => {},
    setIsTimerRunning: () => {},
});

export default GlobalContext;