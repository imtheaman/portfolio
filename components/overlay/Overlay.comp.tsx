import React, { ReactNode, useRef } from 'react'

const Overlay: React.FC<{children: ReactNode}> = ({children}) => {
  return (
    <div className='absolute top-0 left-0 right-0 bottom-0 z-50 bg-[rgba(0,0,0,0.9)] flex justify-center items-center p-12'>
        {children}
    </div>
  )
}

export default Overlay