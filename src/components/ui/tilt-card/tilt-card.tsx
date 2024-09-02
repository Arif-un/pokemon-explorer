import React from 'react'
import Tilt from 'react-parallax-tilt'

import './parralex-effect.css'

interface TiltCardProps {
  children: React.ReactNode
}

export default function TiltCard({ children }: TiltCardProps) {
  return (
    <Tilt
      glareEnable
      gyroscope
      scale={1.05}
      tiltMaxAngleY={10}
      glarePosition="all"
      glareBorderRadius="24px"
      glareMaxOpacity={0.2}
      className="parallax-effect-glare-scale inline-flex flex-col justify-center group cursor-pointer bg-slate-800 dark:bg-slate-900 p-2 dark:text-slate-50 rounded-3xl dark:border-slate-800 border"
    >
      {children}
    </Tilt>
  )
}
