import { PropsWithChildren, Dispatch, SetStateAction, createContext, ReactNode } from "react";

export type ModalChildProps = {
    modalTitle: string;
    reactNode: ReactNode;
}

type GlobalContextType = PropsWithChildren<{
    isTimerRunning: boolean;
    setMovementDetection: Dispatch<SetStateAction<boolean>>,
    movementDetection: boolean,
    startTimer: () => void;
    setIsTimerRunning: Dispatch<SetStateAction<boolean>>
}>;

const GlobalContext = createContext<GlobalContextType>({
    isTimerRunning: false,
    movementDetection: false,
    startTimer: () => {},
    setMovementDetection: () => {},
    setIsTimerRunning: () => {},
});

export default GlobalContext;