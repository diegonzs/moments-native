import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const FileTextIcon = (props: SvgProps) => (
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
      d="M3.879 1.879A3 3 0 0 1 6 1h8a1 1 0 0 1 .707.293l6 6A1 1 0 0 1 21 8v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V4a3 3 0 0 1 .879-2.121ZM6 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8.414L13.586 3H6Z"
      fill="currentColor"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14 1a1 1 0 0 1 1 1v5h5a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1ZM7 13a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1ZM7 17a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1ZM7 9a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Z"
      fill="currentColor"
    />
  </Svg>
)

export default FileTextIcon
