import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const TagIcon = (props: SvgProps) => (
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
      d="M10.964 2.67a3.041 3.041 0 0 1 2.272.89l6.614 6.613a3.041 3.041 0 0 1 0 4.3l-5.377 5.377a3.041 3.041 0 0 1-4.3 0l-6.614-6.614c-.6-.6-.922-1.424-.888-2.272l.263-6.572a1.52 1.52 0 0 1 1.458-1.458l6.572-.263Zm1.197 1.964a1.52 1.52 0 0 0-1.136-.444l-6.572.263-.263 6.572a1.52 1.52 0 0 0 .444 1.136l6.614 6.614a1.52 1.52 0 0 0 2.15 0l5.376-5.377a1.52 1.52 0 0 0 0-2.15l-6.613-6.614Z"
      fill="currentColor"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7 8.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z"
      fill="currentColor"
    />
  </Svg>
)

export default TagIcon
