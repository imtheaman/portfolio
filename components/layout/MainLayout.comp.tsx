import React, { ReactNode } from 'react'

const MainLayout: React.FC<{heading: ReactNode, children: ReactNode}> = ({heading, children}) => {
  return (
    <div className='flex pl-12 flex-col justify-between h-full w-full'>
      <h1 className='text-3xl capitalize font-semibold pl-6 max-w-fit cyber-h text-[var(--green-two)] justify-self-start self-start'>{heading}</h1>
      <div className='flex justify-center items-center w-full h-full'>
        {children}
      </div>
    </div>
  )
}

export default MainLayout