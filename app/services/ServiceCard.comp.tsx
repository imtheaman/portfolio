import Button from '@/components/button/Button.comp'
import CyberCard from '@/components/card/CyberCard.comp'
import { useRouter } from 'next/navigation';
import React from 'react'

interface IService { name: string; desc: string; starting_price: string; }

const ServiceCard: React.FC<IService> = ({desc, name, starting_price}) => {
  const router = useRouter();
  const nameToRoute = (name: string) => {
    return '/services/' + name.trim().toLowerCase().split(' ').join('-');
  }
  return (
    <CyberCard parentClassName="hover-cyber-glitch-0">
            <h3 className="text-3xl font-medium">{name}</h3>
            <p className="text-[var(--green-three)] my-3 h-32 overflow-hidden">
              {desc}
            </p>
            <div className="flex items-center justify-between">
              <span className="text-lg">Starting <span className="text-3xl">{starting_price}</span></span>
              <Button className="no-animate" onClick={() => router.push(nameToRoute(name))}>Build Now</Button>
            </div>
          </CyberCard>
  )
}

export default ServiceCard