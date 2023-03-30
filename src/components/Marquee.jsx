import React from 'react'
import Marquee from "react-fast-marquee";

const MarqueeText = ({background,children}) => {
  return (
    <div>
          <Marquee
          className={" py-2 overflow-hidden z-20 flex gap-4 " + background}
          speed={30}
          gradient={false}
        >
        {children}
        </Marquee>
       
    </div>
  )
}

export default MarqueeText