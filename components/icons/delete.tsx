import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const DeleteIcon = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M3.809 20.15 3.05 5H20.95l-.758 15.15A3 3 0 0 1 17.195 23H6.805a3 3 0 0 1-2.996-2.85ZM8 5h8V3a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2Z"
      stroke="currentColor"
      strokeWidth={2}
    />
    <Path
      d="M1 5h22M15 11v5M9 11v5"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
    />
  </Svg>
)

export default DeleteIcon
