import React from 'react'
import '../styles/hacker.css'
import ProfileCard from './home/ProfileCard.comp'

const Home: React.FC = () => {
  return (
      <div className='w-full h-full flex'>
        <ProfileCard />
        <div className='flex-1'></div>
      </div>
  )
}

export default Home




{/* <MainCard color='color-primary' bgColor='bg-primary' className='w-[85%] h-total'> */}