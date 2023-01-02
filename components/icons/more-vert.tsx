import * as React from 'react'
import Svg, { SvgProps, Circle } from 'react-native-svg'

const MoreVertIcon = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Circle cx={12} cy={7} r={2} fill="currentColor" />
    <Circle cx={12} cy={17} r={2} fill="currentColor" />
  </Svg>
)

export default MoreVertIcon
