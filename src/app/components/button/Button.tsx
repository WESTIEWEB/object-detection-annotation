
import React, { PropsWithChildren, ReactNode, createContext } from 'react';

type ButtonProps = PropsWithChildren<{
    children: ReactNode;
    clickEvent: () => void;
    styles: string;
}>
const ReusableButton: React.FC<ButtonProps> = ({children, styles, clickEvent,}) => {


  return (
    <button 
      className={`bg-[#755AE2] rounded-[7px] flex items-center justify-center ${styles}`}
      onClick={clickEvent}>
          {children}
    </button>
  )
}

export default ReusableButton
