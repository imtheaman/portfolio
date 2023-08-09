'use client'
import Input from '@/components/input/Input.comp'
import React, { useState } from 'react'
import Terminal from './Terminal.comp';

const CommandInput = () => {
    const [showTerminal, setShowTerminal] = useState(false);
    const [value, setValue] = useState('')
    const commands = ['help', 'about', 'services', 'portfolio', 'blog', 'socials', 'business', 'contact']
  return (
    <>
    <Input autoFocus reverted value={value} setValue={setValue} onKeyDown={
        (e: any) => {if(commands.includes(value) && e.key === 'Enter') setShowTerminal(true)}
        } />
      {showTerminal && <Terminal onKeyDown={(e: any) => e.key === 'Escape' ? setShowTerminal(false): console.log(e.key)} />}
    </>
  )
}

export default CommandInput