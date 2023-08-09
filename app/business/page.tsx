'use client'
import React from 'react'
import Button from '../../components/button/Button.comp'
import Input from '../../components/input/Input.comp'
import TextArea from '@/components/input/Textarea.comp'
import MainLayout from '@/components/layout/MainLayout.comp'

const Business = () => {
  return (
    <MainLayout heading={<span>Have any business deal?<br/><span className='text-lg font-normal'>Let's connect</span></span>}>
      <div className='flex flex-col max-w-[40rem] w-full self-center space-y-6'>
        <Input placeholder='Name' />
        <Input placeholder='Contact' />
        <TextArea placeholder='Message' />
        <Button className='hover-animate self-end' onClick={() => {}}>Submit</Button>
      </div>
      </MainLayout>
  )
}

export default Business