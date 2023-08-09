import TerminalLayout from '@/components/layout/TerminalLayout.comp'
import React from 'react'
import data from '../../data.json'

const Terminal = ({...others}) => {
  return (
    <TerminalLayout {...others}>
      <ul className='text-lg space-y-3'>
        <li className='text-3xl'>Welcome {localStorage.getItem('username') || "User"},</li>
        <li>You can use the terminal in such a way that each command typed by you <br/>will show you the related information  below are the commands available:</li>
        <li>{data.terminal.commands.map((c) => <p className='flex justify-between w-[30rem]' key={c}><span>| {c}:</span> <span>It&apos;s a help command |</span></p>)}</li>
      </ul>
    </TerminalLayout>
  )
}

export default Terminal