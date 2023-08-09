import MainLayout from '@/components/layout/MainLayout.comp'
import React from 'react'

const Service: React.FC<{params: {slug: string}}> = ({params}) => {
  const routeToName = (route: string) => {
    return route.replace('/services/', '').split('-').join(' ');
  }
  return (
    <MainLayout heading={routeToName(params.slug)}>
    <div></div>
    </MainLayout>
  )
}

export default Service