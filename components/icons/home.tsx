import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const HomeIcon = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M2 9.88a3 3 0 0 1 1.221-2.416L12 1l8.779 6.464A3 3 0 0 1 22 9.88V20.5a2.5 2.5 0 0 1-2.5 2.5H16a1 1 0 0 1-1-1v-6a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5v6a1 1 0 0 1-1 1H4.5A2.5 2.5 0 0 1 2 20.5V9.88Z"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default HomeIcon
