
import React, { PropsWithChildren, ReactNode, createContext } from 'react';

type ButtonProps = PropsWithChildren<{
    children: ReactNode;
    clickEvent?: () => void;
}>
const ReusableButton: React.FC<ButtonProps> = ({children, clickEvent,}) => {


  return (
    <button 
    className='bg-[#755AE2] rounded-[7px] flex items-center justify-center w-[207px] h-[44px]'
    onClick={clickEvent}>
        {children}
    </button>
  )
}

export default ReusableButton
