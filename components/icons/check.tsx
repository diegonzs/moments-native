import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const CheckIcon = (props: SvgProps) => (
  <Svg
    width={14}
    height={11}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="m13 1-8.25 9L1 5.91"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default CheckIcon
