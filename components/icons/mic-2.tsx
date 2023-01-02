import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const Mic2Icon = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M7.833 6.167a4.167 4.167 0 0 1 8.334 0V12a4.167 4.167 0 1 1-8.334 0V6.167ZM12 3.667a2.5 2.5 0 0 0-2.5 2.5V12a2.5 2.5 0 0 0 5 0V6.167a2.5 2.5 0 0 0-2.5-2.5Z"
      fill="currentColor"
    />
    <Path
      d="M5.333 11.167a.834.834 0 0 1 .834.833 5.833 5.833 0 0 0 11.666 0 .833.833 0 0 1 1.667 0 7.5 7.5 0 0 1-6.667 7.455v1.712a.834.834 0 0 1-1.666 0v-1.712A7.5 7.5 0 0 1 4.5 12a.833.833 0 0 1 .833-.833Z"
      fill="currentColor"
    />
  </Svg>
)

export default Mic2Icon
