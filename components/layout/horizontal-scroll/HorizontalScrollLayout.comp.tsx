import React, { ReactNode } from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Arrow from './Arrow.comp';

const HorizontalScrollLayout: React.FC<{className?: string, slidesToShow: number, children: ReactNode}> = ({className, slidesToShow, children}) => {
  const settings = {
    className: `center mx-4 ${className}`,
    infinite: false,
    swipeToSlide: true,
    prevArrow: <Arrow direction='left' />,
    nextArrow: <Arrow direction='right' />,
    afterChange: function(index: number) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    }
  };
    return (
    <Slider slidesToShow={slidesToShow} {...settings}>
        {children}
    </Slider>
  )
}

export default HorizontalScrollLayout