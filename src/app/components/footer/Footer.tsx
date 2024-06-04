import React from 'react'

const Footer = () => {
  return (
    <div className='w-full inline-block fixed bottom-10'>
      <div className='flex mx-auto container justify-between items-center py-4 md:py-8'>
          <ul className='flex items-center gap-2 list-none justify-center'>
            <li className='text-[#8C8CA1] text-sm font-normal'>POWERED BY </li>
            <li className='text-lg text-[#0E0E2C] font-medium'>Getlinked.AI</li>
          </ul>
      </div>
    </div>
  )
}

export default Footer
