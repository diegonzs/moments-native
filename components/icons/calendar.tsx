import * as React from 'react'
import Svg, { SvgProps, Rect, Path } from 'react-native-svg'

const CalendarIcon = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Rect
      x={2}
      y={3}
      width={20}
      height={19}
      rx={3}
      stroke="currentColor"
      strokeWidth={2}
    />
    <Path
      d="M7 1v2M17 1v2M2 8h20M6.5 13h1M11.5 13h1M16.5 13h1M6.5 17h1M11.5 17h1M16.5 17h1"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default CalendarIcon
