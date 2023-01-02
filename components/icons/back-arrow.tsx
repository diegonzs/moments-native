import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const BackArrowIcon = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M9.717 5 3 12l6.717 7"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      d="M4.267 12.032H20"
    />
  </Svg>
)

export default BackArrowIcon
