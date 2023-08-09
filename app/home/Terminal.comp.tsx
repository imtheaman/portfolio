import TerminalLayout from '@/components/layout/TerminalLayout.comp'
import React from 'react'

const Terminal = ({...others}) => {
  return (
    <TerminalLayout {...others}>
        <div>Terminal</div>
    </TerminalLayout>
  )
}

export default Terminal