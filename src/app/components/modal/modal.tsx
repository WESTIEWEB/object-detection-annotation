import React, { FC, PropsWithChildren, ReactNode } from 'react'

type ModalProps = PropsWithChildren<{
    children: ReactNode;
    isOpen?:boolean;
}>

const ReusableModal: FC<ModalProps> = ({children, isOpen}) => {

  return (
    <div className='absolute top-0 bottom-0 left-0 right-0 content-center bg-[#00000061]'>
      {children}
    </div>
  )
}

export default ReusableModal
