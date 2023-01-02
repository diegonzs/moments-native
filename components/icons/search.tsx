import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const SearchIcon = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M11 20a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM22 22l-4-4"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default SearchIcon
