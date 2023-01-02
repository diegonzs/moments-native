import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const CloseIcon = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="m6 6 12.774 12.774M6 18.774 18.774 6"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default CloseIcon
