import React from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const Arrow: React.FC<{ className?: string, style?: any, onClick?: any, direction: 'left' | 'right' }> = ({ className, style, onClick, direction }) => {
    
    if (direction === 'left') return <FaChevronLeft size='2rem' color='green' className={className} style={style} onClick={onClick} />

    else if (direction === 'right') return <FaChevronRight size='2rem' color='green' className={className} style={style} onClick={onClick} />
}

export default Arrow