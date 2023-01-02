import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const BarChartIcon = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M18 20V10M12 20V4M6 20v-6"
      stroke="currentColor"
      strokeOpacity={0.6}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default BarChartIcon
