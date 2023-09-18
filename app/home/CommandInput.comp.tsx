'use client'
import Input from '@/components/input/Input.comp'
import React, { useState } from 'react'
import Terminal from './Terminal.comp';
import data from '../../data.json'

const CommandInput = () => {
    const [showTerminal, setShowTerminal] = useState(false);
    const [value, setValue] = useState('')
    const commands = data.terminal.commands.map(cmd => cmd.name)
  return (
    <>
    <Input autoFocus reverted value={value} onChange={setValue} onKeyDown={
        (e: any) => {if(commands.includes(value) && e.key === 'Enter') setShowTerminal(true)}
        } />
      {showTerminal && <Terminal initValue={value} showTerminal={setShowTerminal}/>}
    </>
  )
}

export default CommandInput