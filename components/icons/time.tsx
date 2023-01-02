import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const TimeIcon = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 3.667a8.333 8.333 0 1 0 0 16.666 8.333 8.333 0 0 0 0-16.666ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Z"
      fill="currentColor"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.889 7c.49 0 .889.384.889.857v4.788l1.962 1.892a.836.836 0 0 1 0 1.212.912.912 0 0 1-1.257 0l-2.223-2.143A.842.842 0 0 1 11 13V7.857c0-.473.398-.857.889-.857Z"
      fill="currentColor"
    />
  </Svg>
)

export default TimeIcon
