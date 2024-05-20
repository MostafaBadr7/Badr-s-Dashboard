'use client'

import React from 'react'
import CountUp from 'react-countup'

 const AnimatedCountUp = ({amount}: {amount:number} ) => {
  return (
    <div className='w-full'>
        <CountUp
        duration={2.75}
        separator=","
        decimals={2}
        decimal=","
        prefix="USD"
         end={amount} />
    </div>
    
  )
}

export default AnimatedCountUp
