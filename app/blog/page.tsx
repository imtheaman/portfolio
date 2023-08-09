import MainLayout from '@/components/layout/MainLayout.comp'
import React from 'react'

const Blog = () => {
  return (
    <MainLayout heading='Blog'>
    <div>
        <h1 className='text-3xl'>We&apos;re working on it</h1>
        <p className='text-[var(--green-one)]'>Blog would appear soon on this page.</p>
    </div>
    </MainLayout>
  )
}

export default Blog