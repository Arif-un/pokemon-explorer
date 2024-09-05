import { type CSSProperties } from 'react'
import { BiSolidZap } from 'react-icons/bi'
import { FaShieldVirus } from 'react-icons/fa'
import { FaShieldCat } from 'react-icons/fa6'
import { GiFire } from 'react-icons/gi'
import { GoHeartFill } from 'react-icons/go'
import { RiSwordFill } from 'react-icons/ri'

interface StatsIconProps {
  name: string
  style?: CSSProperties
}

export default function StatsIcon({ name, style }: StatsIconProps) {
  switch (name) {
    case 'hp':
      return <GoHeartFill className="size-6" style={style} />
    case 'attack':
      return <RiSwordFill className="size-6" style={style} />
    case 'defense':
      return <FaShieldCat className="size-6" style={style} />
    case 'special-attack':
      return <GiFire className="size-6" style={style} />
    case 'special-defense':
      return <FaShieldVirus className="size-6" style={style} />
    case 'speed':
      return <BiSolidZap className="size-6" style={style} />
    default:
      return null
  }
}
