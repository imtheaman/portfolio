import React, { ReactNode, useEffect, useRef } from 'react'
import Overlay from '../overlay/Overlay.comp'

const TerminalLayout: React.FC<{children: ReactNode}> = ({children, ...others}) => {
  const divRef = useRef<HTMLDivElement>(null);
  
  return (
    <Overlay>
        <div ref={divRef} {...others} className='cyber-tile overflow-y-scroll p-8 w-full h-full bg-[var(--green-one-dark)]'>
        {children}
        </div>
    </Overlay>
  )
}

export default TerminalLayout