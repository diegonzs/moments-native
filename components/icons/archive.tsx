import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const ArchiveIcon = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M20 8v12H4V8M22 4H2v4h20V4ZM10 12h4"
      stroke="currentColor"
      strokeOpacity={0.6}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default ArchiveIcon
