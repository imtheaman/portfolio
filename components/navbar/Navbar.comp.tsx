import React from 'react'
import LinkAsBtn from '../button/LinkAsBtn.comp'

const Navbar: React.FC<{className?: string}> = ({className}) => {
  return (
    <nav className={` flex w-full px-12 py-8 items-center justify-between ${className || ''}`}>
        <ul className='flex space-x-6'>
            <li><LinkAsBtn  href='/'>Home</LinkAsBtn></li>
            <li><LinkAsBtn  href='/services'>Services</LinkAsBtn></li>
            <li><LinkAsBtn  href='/portfolio'>Portfolio</LinkAsBtn></li>
            <li><LinkAsBtn  href='/blog'>Blog</LinkAsBtn></li>
            <li><LinkAsBtn  href='/socials'>Socials</LinkAsBtn></li>
            <li><LinkAsBtn  href='/business'>Business</LinkAsBtn></li>
        </ul>
        <LinkAsBtn className='active' href='/business'>Connect Now</LinkAsBtn>
    </nav>
  )
}

export default Navbar