import React from 'react'
import Tilt, { type GlarePosition } from 'react-parallax-tilt'

import './parralex-effect.css'

interface TiltCardProps {
  children: React.ReactNode
  className?: string
  scale?: number
  tiltMaxAngleY?: number
  glareEnable?: boolean
  gyroscope?: boolean
  glarePosition?: string
  glareBorderRadius?: string
  glareMaxOpacity?: number
  parralexEffect?: boolean
}

export default function TiltCard({
  children,
  className = '',
  scale = 1.05,
  tiltMaxAngleY = 10,
  glareEnable = true,
  gyroscope = true,
  glarePosition = 'all',
  glareBorderRadius = '24px',
  glareMaxOpacity = 0.2,
  parralexEffect = true
}: TiltCardProps) {
  return (
    <Tilt
      scale={scale}
      tiltMaxAngleY={tiltMaxAngleY}
      glareEnable={glareEnable}
      gyroscope={gyroscope}
      glarePosition={glarePosition as GlarePosition}
      glareBorderRadius={glareBorderRadius}
      glareMaxOpacity={glareMaxOpacity}
      className={`${parralexEffect ? 'parallax-effect-glare-scale' : ''} ${className}`}
    >
      {children}
    </Tilt>
  )
}
