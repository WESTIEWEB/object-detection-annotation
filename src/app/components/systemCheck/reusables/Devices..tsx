import React, { PropsWithChildren } from 'react'

type DeviceProps = PropsWithChildren<
{ 
    icon: any;
    label: string;
    children: React.ReactNode;
    bg: string;
    size?: string;
    color: string;
    iconBg: string;
    handlePres?: () => any
}
>

const Devices: React.FC<DeviceProps> = ({icon, handlePres, bg, iconBg, size, color, label, children}) => {
  return (
    <div onClick={handlePres} className={`${bg} ${size} cursor-pointer relative flex flex-col justify-center items-center rounded-[10px]`}>
      <p className={`flex items-center p-[4px] rounded-full absolute top-1 right-1 justify-center ${iconBg} ${color}`}>
        {icon}
      </p>
      {children}
      <p className='text-[#4A4A68] text-xs'>
        {label}
      </p>
    </div>
  )
}

export default Devices
