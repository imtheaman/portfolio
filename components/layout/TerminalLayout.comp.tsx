import React, { ReactNode } from 'react'
import Overlay from '../overlay/Overlay.comp'

const TerminalLayout: React.FC<{children: ReactNode}> = ({children, ...others}) => {
  return (
    <Overlay>
        <div {...others} className='cyber-tile w-full h-full bg-[var(--green-one-dark)]'>
        {children}
        </div>
    </Overlay>
  )
}

export default TerminalLayout