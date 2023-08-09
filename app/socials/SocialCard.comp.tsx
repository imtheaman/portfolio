import CyberCard from '@/components/card/CyberCard.comp'
import Link from 'next/link'
import React from 'react'
import { FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'

const SocialCard: React.FC<{name: string, profile_url: string, username: string}> = ({name, profile_url, username}) => {
    
  return (
    <Link href={profile_url} target="_blank">
          <CyberCard className="justify-center items-center">
            <Icon name={name} size={80} title={username} />
            <p className="mt-2">{name}</p>
          </CyberCard>
        </Link>
  )
}

export default SocialCard

const Icon: React.FC<{name: string}> = ({name, ...others}) => {
    switch(name.toLowerCase().trim()) {
        case "linkedin":
            return <FaLinkedin {...others} />
        case "github":
            return <FaGithub {...others} />
        case "youtube":
            return <FaYoutube {...others} />
        case "email":
          return <MdEmail {...others} />
    }
}