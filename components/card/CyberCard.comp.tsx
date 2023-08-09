import React, { ReactNode } from 'react'

const CyberCard: React.FC<{className?: string, parentClassName?: string, children: ReactNode}> = ({className, parentClassName, children}) => {
  return (
    <div className={`cyber-tile mx-4 bg-[var(--green-one-dark)] fg-green ${parentClassName || ''}`}>
      <div className={`w-full h-full p-6 flex flex-col ${className || ''}`}>
      {children}
      </div>
    </div>
  )
}

export default CyberCard