import LinkAsBtn from '@/components/button/LinkAsBtn.comp'
import CyberCard from '@/components/card/CyberCard.comp'
import Image from 'next/image';
import React from 'react'

interface IPortfolio { name: string; desc1: string; desc2: string; image: string; preview_link: string; source_link: string; }

const PortfolioCard : React.FC<IPortfolio> = ({desc1, desc2, image, name, preview_link, source_link}) => {
  return (
    <div className='flex justify-between items-start'>
        <CyberCard parentClassName='w-5/12 hover-cyber-glitch-0'>
            <Image alt={name} src={image} />
        </CyberCard>
        <div className='flex-1 mx-12 my-1 self-stretch flex flex-col justify-between'>
            <div>
            <h1 className='text-3xl text-[var(--green-two)]'>{name}</h1>
            <p className='mt-3'>{desc1}</p>
            <p className='mt-3'>{desc2}</p>
            </div>
            <div className='flex justify-between items-center'>
            <LinkAsBtn target='_blank' href={preview_link} className='hover-animate'>Live Preview</LinkAsBtn>
            <LinkAsBtn target='_blank' href={source_link} className='hover-bg'>Source Code</LinkAsBtn>
            </div>
        </div>
    </div>
  )
}

export default PortfolioCard