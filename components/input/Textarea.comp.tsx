import React, { Dispatch, HTMLInputTypeAttribute, useState } from 'react'
import './index.css'

const TextArea: React.FC<{value: string, onChange: Dispatch<any>, placeholder: string, reverted?:boolean, autoFocus?: boolean}> = ({value, onChange, reverted = false, placeholder, autoFocus = false, ...others}) => {
  const classname1 = reverted ? 'bg-[var(--green-one-dark)]' : 'bg-[var(--green-two)]'
  const classname2 = reverted ? 'bg-[var(--green-one-dark)]' : 'bg-black'
  return (
    <div  className={`input p-[0.1rem] ${classname1} w-full`}>
    <textarea placeholder={placeholder} autoFocus={autoFocus} {...others}  className={`input py-4 h-32 resize-none align-top placeholder:text-inherit text-xl pl-5 ${classname2} w-full focus:outline-none`} value={value} onChange={(e) => onChange(e.target.value)} />
  </div>
  )
}

export default TextArea